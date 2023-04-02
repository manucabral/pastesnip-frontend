import { gql } from '@apollo/client';

/**
 * @description A simple query to test the GraphQL endpoint.
 * @returns {string} The string "Hello, world!"
 * @example { hello }
 */
export const Q_HELLO = gql`{ hello }`;