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

 /**
  * Creates a user from the given row.
  * 
  * @param result The result retrieved from the database
  * @return A new user
  */
const getUserFromResult = (result) => {
    return {
        username: result.username
    };
};

module.exports = getUserFromResult;