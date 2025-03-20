export type ProjectClient = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  coverPhoto: string;
  githubLink: string;
  previewLink: string;
  isEnable: boolean;
  tags?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
