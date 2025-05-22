export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
  category?: string;
}

// New type for the collections object
export type CollectionCategory =
  | 'featured'
  | 'seasonal'
  | 'thematic'
  | 'special'
  | 'sarees';

export type CategorizedCollections = {
  [key in CollectionCategory]: Collection[];
};
