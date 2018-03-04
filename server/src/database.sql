DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    username TEXT PRIMARY KEY NOT NULL CONSTRAINT username_length CHECK (char_length(username) > 3),
    email TEXT UNIQUE NOT NULL CONSTRAINT email_length CHECK (char_length(email) > 6),
    password TEXT NOT NULL CONSTRAINT password_length CHECK (char_length(password) > 8),
    role TEXT NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE NOT NULL,
    last_updated_on TIMESTAMP WITH TIME ZONE NOT NULL
);