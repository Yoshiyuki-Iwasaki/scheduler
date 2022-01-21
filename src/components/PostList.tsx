import React from 'react'
import PostItem from "./PostItem";

const PostList = ({ state, dispatch }:any) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>本文</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event: any, index: number) => (
            <PostItem key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PostList
