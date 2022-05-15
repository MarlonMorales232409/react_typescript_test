import { useStateContext } from '../context/StateContextProvider';
import PaginationButtons from './PaginationButons';
import PostBody from './PostBody';

const PostList = () => {


  const { filteredPost } = useStateContext();
  // Allow use a pagination
  const postsList = filteredPost();


  return (
    <div>
      {
        postsList.map(
          (p: any, i: number) => (
            <PostBody
              key={p.id}
              title={p.title}
              body={p.body}
              id={p.id}
            />
          )
        )
      }
      <PaginationButtons />
    </div>
  );
};

export default PostList;
