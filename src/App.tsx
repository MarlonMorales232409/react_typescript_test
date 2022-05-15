import './styles.css';
import './App.css';
import Form from './components/Form';
import PostList from './components/PostList';

export default function App() {
  return (
    <div className="main_container">
      <Form />
      <PostList />
    </div>
  );
}
