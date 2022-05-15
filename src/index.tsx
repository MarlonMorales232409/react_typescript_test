import { StrictMode } from 'react';
import { StateContextProvider } from './context/StateContextProvider';
import ReactDOM from 'react-dom/client'
import App from './App'



const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </StrictMode>
);

