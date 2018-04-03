DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS permissions CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS user_roles CASCADE;

CREATE TABLE roles (
    rolename TEXT PRIMARY KEY NOT NULL CONSTRAINT rolename_length CHECK (char_length(rolename) > 1),
    description TEXT CONSTRAINT description_length CHECK (char_length(description) > 1)
);

INSERT INTO roles (rolename, description)
VALUES ('TRAINER', 'Role used to represent the trainer.'),
('ADMIN', 'Role used to represent the administrator.'),
('MEMBER', 'Role used to represent the member of the association.'),
('ORDER_MANAGER', 'Role used to represent the ones who are managing orders.'),
('SECRETARY', 'Role used to represent the secretary.'),
('PARENT', 'Role used to represent a users that have children.');

CREATE TABLE users (
    user_id TEXT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL CONSTRAINT username_length CHECK (char_length(username) > 3)
);

CREATE TABLE user_roles (
    user_id TEXT NOT NULL,
    rolename TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (rolename) REFERENCES roles(rolename),
    UNIQUE (user_id, rolename)
);

CREATE TABLE accounts (
    account_id TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL CONSTRAINT email_length CHECK (char_length(email) > 6),
    password TEXT NOT NULL CONSTRAINT password_length CHECK (char_length(password) > 8),
    created_on TIMESTAMP WITH TIME ZONE NOT NULL,
    last_updated_on TIMESTAMP WITH TIME ZONE NOT NULL,
    FOREIGN KEY (account_id) REFERENCES users(user_id)
);

CREATE TABLE permissions (
    permissionname TEXT PRIMARY KEY NOT NULL CONSTRAINT permissionname_length CHECK (char_length(permissionname) > 1),
    description TEXT NOT NULL CONSTRAINT description_length CHECK (char_length(description) > 1)
);