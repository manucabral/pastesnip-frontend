import { gql } from "@apollo/client";

/**
 * @description Login mutation for user
 * @param {String} email
 * @param {String} password
 * @returns {Object} - The access and refresh tokens (string)
 */
export const M_LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            access
            refresh
        }
    }
`;

/**
 * @description Register mutation for create a new user
 * @param {String} username
 * @param {String} email
 * @param {String} password
 * @returns {Object} - The user data (object)
 */
export const M_REGISTER = gql`
    mutation register($username: String!, $email: String!, $password: String!) {
        createNewUser(username: $username, email: $email, password: $password) {
            id
            username
            email
        }
    }
`;