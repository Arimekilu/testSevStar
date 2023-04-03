export interface IPost {
  id: number,
  created_at: string,
  created_at_i: number,
  type: string,
  author: string,
  children: IPost[],
  parent_id: unknown,
  points: number,
  story_id: unknown,
  text?: string,
  title: string | null,
  url: string

}

export interface IState {
  state: 'error' | 'pending' | 'ready';
}

export interface IPostsModel extends IState{
  items?: IPost[]
}

export interface IPostModel extends IState{
  item?: IPost
}
