import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { gql, useQuery } from "@apollo/client";

export const GET_REPORTS = gql`
query {
  reports {
    _id
    title
    description
    url
  }
}
`;



