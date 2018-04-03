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

const getRoleFromResult = require('../../models/getUserFromResult');
const executeExpression = require('../common/executeExpression');

module.exports = (db, role) => {
    const expression = `
    INSERT INTO roles (rolename)
    VALUES ($1)
    RETURNING *;
    `;

    const args = [
        role.rolename
    ];

    return executeExpression(db, expression, args).then(result => {
        if (result && result.length === 1) {
            return getRoleFromResult(result[0]);
        }
        throw new Error(`The role with the role name ${role.rolename} cannot be created.`);
    });
};