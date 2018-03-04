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

const bcrypt = require('bcrypt-nodejs');

const getUserFromResult = require('../../models/getUserFromResult');
const executeExpression = require('../common/executeExpression');

module.exports = (db, user) => {
    const expression = `
    INSERT INTO users (username, email, password, role, created_on, last_updated_on)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `;

    const hashedPassword = bcrypt.hashSync(user.passord, bcrypt.genSaltSync(8), null);

    const args = [
        user.username,
        user.email,
        hashedPassword,
        user.role,
        new Date().toISOString(),
        new Date().toISOString()
    ];

    return executeExpression(db, expression, args).then(result => {
        debugger;
        if (result && result.length === 1) {
            return getUserFromResult(result[0]);
        }
        throw new Error(`The user with the username ${user.username} cannot be created.`);
    });
};