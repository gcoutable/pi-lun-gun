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

const mutationResolverInitialiazer = require('./mutation-resolvers');
const queryResolversInitializer = require('./query-resolvers');

/**
 * Creates the composite resolver with the given database connection.
 * 
 * @param {*} db The database connection
 * @returns The composite resolver for the GraphQL schema
 */
module.exports = (db) => {
    const resolvers = {
        Mutation: mutationResolverInitialiazer(db),
        Query: queryResolversInitializer(db)
    };

    return resolvers;
}