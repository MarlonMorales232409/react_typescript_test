import { useStateContext } from '../context/StateContextProvider';
import './Form.css';

const Form = () => {

  const { setTitle, setBody, handleSubmit } = useStateContext();

  return (
    <>
      <form onSubmit={handleSubmit} className="form" id="form">

        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="form__input-title"
        />

        <textarea
          placeholder="Post"
          onChange={(e) => setBody(e.target.value)}
          className="form__input-body"
        ></textarea>

        <button className="form__button">Publish</button>

      </form>
    </>
  );
};

export default Form;
