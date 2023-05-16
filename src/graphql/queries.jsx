import { gql } from '@apollo/client'

/**
 * @description A simple query to test the GraphQL endpoint.
 * @returns {string} The string "Hello, world!"
 * @example { hello }
 */
export const Q_HELLO = gql`
    {
        hello
    }
`

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
            verified
            createdAt
        }
    }
`

/**
 * @description A query to get all the pastes.
 * @returns {array} An array of pastes.
 * @example { pastes { id, title, content, syntax_highlight, private, createdAt } }
 */
export const Q_PASTES = gql`
    query {
        pastes {
            id
            title
            content
            syntax_highlight
            private
            createdAt
        }
    }
`
export const Q_PASTES_BY_AUTHORID = gql`
    query getPastesByAuthor($authorId: ID!) {
        getPastesByAuthor(authorId: $authorId) {
            id
            title
            content
            syntax_highlight
            private
            createdAt
        }
    }
`

/**
 * @description A query to get a user by their ID.
 * @param {string} id The user's ID.
 * @returns {object} The user's data.
 * @example { getUserById(id: "123") { id, username, email, createdAt } }
 */
export const Q_GET_USER_BY_ID = gql`
    query GetUserById($id: ID!) {
        getUserById(id: $id) {
            id
            username
            email
            verified
            createdAt
        }
    }
`
