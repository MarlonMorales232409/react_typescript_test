export interface ContextProviderInterface {
  children: JSX.Element | JSX.Element[];
}

export interface Posts {
  title: string,
  body: string,
  id: number,

}

export interface PostState {
  posts: Posts[]
}