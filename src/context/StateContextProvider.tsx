import { useState, useContext, useEffect } from 'react';
import { addPost, delPost, fetchPosts } from '../helpers/fetchHelper';
import { ContextProviderInterface, Posts } from '../interfaces/interfaces';
import { StateContext } from './StateContext';


export const StateContextProvider = ({ children }: ContextProviderInterface) => {

  // Initial State an empty array that will have all post
  const [post, setPost] = useState<Posts[]>([]);

  // Post state 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(0);


  // Load all post when the page load for first time
  useEffect(() => {
    const getAllPost = async () => {
      const data = await fetchPosts();
      setPost([...data]);
    };
    getAllPost();
  }, []);


  // Handler for Post request
  const getData = async (title: string, body: string): Promise<void> => {
    const data: Posts = await addPost(title, body);
    setPost([data, ...post]);
  };


  // Submit data to the api
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    // Check if title and body have information before send it to the server
    // getData(title, body) send the POST request to the API 
    if (title.length > 1 && body.length > 1) {

      getData(title, body);
      const form: any = document.getElementById('form')
      setTitle('')
      setBody('')
      form.reset();

    } else {

      return alert('A publish must to have a Title and a Message')
    }


  };

  // Delete data and filter the post array 
  const handleDelete = async (id: number) => {
    await delPost(id);
    const filteredData = post.filter((p) => (p.id !== id ? p : ''));
    setPost([...filteredData]);
  };

  // Pagination

  // Split the array in 20 results per pages
  const filteredPost = () => {
    return post.slice(currentPage, currentPage + 20);
  };

  // allow move between pages spliting the array dinamically, always adding 20 or decresing in 20
  const nextPage = () => {
    if (currentPage >= post.length - 20) {
      return;
    }
    setCurrentPage(currentPage + 20);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 20);
  };


  // Global state provider

  return (
    <StateContext.Provider value={
      { post, setTitle, setBody, handleSubmit, handleDelete, filteredPost, nextPage, prevPage }
    }>

      {children}

    </StateContext.Provider>

  );
};

export const useStateContext = () => useContext(StateContext);
