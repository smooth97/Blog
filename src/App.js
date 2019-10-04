import React from 'react';
import Layout from './components/Layout';
import { PostProvider } from './components/PostContext';


function App() {

  return (
    <PostProvider>
      <div className="App">
        <Layout/>
      </div>
    </PostProvider>
  );
}

export default App;
