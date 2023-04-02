export interface IPost {
  id: number,
  created_at: string,
  created_at_i: number,
  type: string,
  author: string,
  children: IPost[],
  parent_id: any,
  points: number,
  story_id: any,
  text?: string,
  title: string | null,
  url: string

}
