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

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const executeExpression = require('./services/common/executeExpression');

/**
 * Retrieves the user and its permissions using its username.
 * 
 * @param {*} db The connection to the database
 * @param {string} username The username
 * @return The user and its permissions
 */
const getUserByUserName = (db, username) => {

};