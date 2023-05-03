import { gql } from '@apollo/client';

/**
 * @description A simple query to test the GraphQL endpoint.
 * @returns {string} The string "Hello, world!"
 * @example { hello }
 */
export const Q_HELLO = gql`{ hello }`;

/**
 * @description A query to get the user's data.
 * @returns {object} The user's data.
 * @example { me { id, username, email, createdAt, updatedAt } }
 */
export const Q_ME = gql`
    query {
        me {
            id
            username
            email
            createdAt
        }
    }
`;