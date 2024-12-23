export type ProjectCreate = {
  title: string;
  description: string;
  tags: string[];
  coverImage: File | string;
  resourceLink: string;
  demoLink?: string;
  price?: string;
  actualPrice?: string;
};

export type ProjectTableProps = {
  id: string;
  title: string;
  coverImage: string;
  isPublic: boolean;
  creationId: string;
  price?: number;
  actualPrice?: number;
  createdAt: string;
};
