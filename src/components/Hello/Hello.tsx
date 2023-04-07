import { graphql } from '@/gql';
import React from 'react';

const test = graphql(`
  query adminMiniTestStatisticDetail($input: StudentStatisticByMiniTestInput!) {
    adminMiniTestStatisticDetail(input: $input) {
      formTest {
        name
      }
    }
  }
`);

const Hello = () => {
  return (
    <>
      <h1>Hello Hello</h1>
    </>
  );
};

export default Hello;
