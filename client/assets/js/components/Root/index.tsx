import React, { FC } from 'react';
import { SWRConfig } from 'swr';
import { API_BASE, API_KEY } from '../../constants/themoviedb';
import Router from '../Router';

async function fetcher(url: string) {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

const Root: FC = () => (
  <SWRConfig
    value={{
      fetcher,
    }}
  >
    <Router />
  </SWRConfig>
);

export default Root;
