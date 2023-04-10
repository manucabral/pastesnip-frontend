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