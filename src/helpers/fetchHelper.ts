import { Posts } from '../interfaces/interfaces';

// API Endpoint 
const url = 'https://jsonplaceholder.typicode.com/posts'


// Get All post
export async function fetchPosts(){
  const json = await fetch(url);
  const data = await json.json();
  return data;
}

// Create a new post
// Check ID allow increment the id that came in each post because the API always return 101 

let checkId = 101;
export async function addPost(title:string, postBody:string): Promise<Posts> {

  const data = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      title: title,
      body: postBody
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  const post = await data.json();

  if (post.id === 101) {
    // First time that I get id: 101 from the API, I set checkId value to 102
    // Next time post.id will be 101 again, checkId will be 102, then post.id will be set with checkId value
    // this allow me to be sure to have an autoincrement unique id for each posst
    if (checkId === 101) {
      checkId += 1;
      return post;

    }else {
      post.id = checkId;
      checkId += 1;
      return post;
    }

  }

  return post

}

// Del post

export async function delPost(id:number): Promise<void> {
  await fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
    .then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      alert('Delete Succeful');
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
