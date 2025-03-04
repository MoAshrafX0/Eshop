export interface ICategore {
  results: number;
  metadata: Metadata;
  data: Categore[];
}

export interface Categore {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}