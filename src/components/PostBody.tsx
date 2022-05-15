import { useStateContext } from '../context/StateContextProvider';
import { Posts } from '../interfaces/interfaces';
import './PostBody.css';

const PostBody = ({ title, body, id }: Posts) => {
  const { handleDelete } = useStateContext();

  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      <p className="body">{body}</p>
      <button className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default PostBody;
