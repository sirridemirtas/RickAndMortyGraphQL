import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $status: String, $gender: String) {
    characters(page: $page, filter: { status: $status, gender: $gender }) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
