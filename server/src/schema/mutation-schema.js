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

const mutationSchema = `
type Mutation {
    createNewUser(newUser: NewUser!): User
    createNewRole(newRole: NewRole!): Role
}

input NewUser {
    username: String!
    email: String!
    password: String!
    role: Role!
}

input NewRole {
    roleName: String!
}
`;

module.exports = mutationSchema;