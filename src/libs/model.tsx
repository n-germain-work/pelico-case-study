import { ChangeEvent } from 'react';

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  owner: {
    login: string;
  };
}

export interface FavoriteRepository extends Repository {
  notation: number;
}

export interface handleSearchChangeProps {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
