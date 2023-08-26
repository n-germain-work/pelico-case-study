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
  notation: number | null;
}
