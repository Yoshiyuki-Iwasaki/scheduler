import React, { useReducer } from 'react';
import reducer from './reducer';
import Input from "./components/Input";
import PostList from "./components/PostList";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <Input dispatch={dispatch} />
      <PostList state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
