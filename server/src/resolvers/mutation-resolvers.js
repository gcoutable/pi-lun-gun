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

const createNewUser = require('../services/users/createNewUser');

module.exports = (db) => {
    const mutationResolvers = {};

    mutationResolvers.createNewUser = (root, args) => {
        return createNewUser(db, args.newUser);
    };

    return mutationResolvers;
}