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

module.exports = (db, expression, args) => {
    return db.query(expression, args)
        .then(result => {
            return result;
        })
        .catch(e => {
            console.log(e);
        });
};