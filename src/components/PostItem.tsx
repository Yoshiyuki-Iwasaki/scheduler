import React from 'react';

const PostItem = ({ dispatch, event }: any) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_EVENT', id });
  };
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default PostItem;
