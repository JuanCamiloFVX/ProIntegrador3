import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { gql } from "graphql-tag";




let ID = "624b7105672e125fd1b7f93f";

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


export const GET_USER_ID = gql`
    query{
      getUserById(_id:"${ID}"){
        user_name
        email
        phoneNumber
      }
    }
    `;

    export const GET_USER = gql`
    query{
      getUserById(_id:"${ID}"){
        user_name
        email
        phoneNumber
        name
        rol_id
      }
    }
    `;

    


