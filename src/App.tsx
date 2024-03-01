import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../dist/index.js';
import '../dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function App() {
  return (
    <div>
      <Button label={'Click here!'} type={'primary'} />
    </div>
  );
}
