/**************************************************************************
 * Copyright (c) 2018 Guillaume Coutable
 * All Rights Reserved. This program and the accompanying materials
 * are made available under the terms of the MIT License
 * which accompanies this distribution, and is available at
 * https://opensource.org/licenses/MIT
 * 
 * Contributors:
 *     Guillaume Coutable - Initial implementation
 **************************************************************************/

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('uuid');
const graphqlServerExpress = require('graphql-server-express');
const cors = require('cors');
// http://vitaly-t.github.io/pg-promise/index.html
const pgp = require('pg-promise')(/*options*/);


const configuration = require('./configuration');
const resolversInitializer = require('./resolvers');
const schemaInitializer = require('./schema');

const db = pgp(configuration.databaseConfiguration);
const queryBody = fs.readFileSync(__dirname + '/database.sql').toString();
db.query(queryBody).catch((reason) => {
    console.log(reason);
});


const resolvers = resolversInitializer(db);
const schema = schemaInitializer(resolvers);

const PORT = 4000;
const app = express();

app.use('*', cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(session({
    genid: (req) => uuid.v4(),
    secret: 'wushu',
    saveUninitialized: false,
    resave: false
}));

//------- Declare Graphql endpoints
app.use('/graphql', bodyParser.json(), graphqlServerExpress.graphqlExpress(request => ({
    schema,
    context: request
})));

app.use('/graphiql', graphqlServerExpress.graphiqlExpress({
    endpointURL: '/graphql'
}));

const server = app.listen(PORT, () => console.log(`GraphQL server is now running on http://localhost:${PORT}`));

process.on('exit', function () {
    console.log('About to exit, waiting for remaining connections to complete');
    server.close();
});

module.exports = app;