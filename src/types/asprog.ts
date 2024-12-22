export type ProjectCreate = {
  title: string;
  description: string;
  tags: string[];
  coverImage: File;
  resourceLink: string;
  demoLink?: string;
  price?: number;
  actualPrice?: number;
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
