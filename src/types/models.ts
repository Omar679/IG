export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

export interface IUser {
  id: number;
  username: string;
  image?: string;
  name: string;
  bio?: string;
  post?: IPost;
  website?: string;
}

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}
