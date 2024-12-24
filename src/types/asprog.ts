export type ProjectCreate = {
  title: string;
  description: string;
  tags: string[];
  coverImage: File;
  resourceLink: string;
  demoLink?: string;
  price?: string;
  actualPrice?: string;
};
export type ProjectUpdate = {
  title: string;
  description: string;
  tags: string[];
  coverImage?: File | null;
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

export type ProjectClient = {
  title: string;
  description: string;
  tags: string;
  coverPhoto: string;
  demoLink?: string;
  price?: string;
  actualPrice?: string;
};
