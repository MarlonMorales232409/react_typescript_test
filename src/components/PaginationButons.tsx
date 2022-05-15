import { useStateContext } from '../context/StateContextProvider';
import './PaginationButtons.css';

const PaginationButtons = () => {
  const { nextPage, prevPage } = useStateContext();

  return (
    <div className="page__btn-container">
      <button onClick={prevPage} className="page_btn">
        Back
      </button>
      <button onClick={nextPage} className="page_btn">
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
