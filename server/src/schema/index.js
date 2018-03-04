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

const graphqlTools = require('graphql-tools');

const mutationSchema = require('./mutation-schema');
const querySchema = require('./query-schema');
const userSchema = require('./user-schema');

const typeDefs = `
${userSchema}

${mutationSchema}
${querySchema}
`;

module.exports = (resolvers) => {
    const schema = graphqlTools.makeExecutableSchema({ typeDefs, resolvers });
    //graphqlTools.addMockFunctionsToSchema({ schema });
    return schema;
};