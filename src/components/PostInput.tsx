import React, { useState } from "react";

const Input = ({ dispatch }: any) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const addEvent = (e: any) => {
    e.preventDefault();
    if (!title) return;
    if (!body) return;
    // dispatch
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="formEventBody">本文</label>
          <textarea
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button onClick={addEvent}>
          イベントを作成
        </button>
        <button>イベントを全て削除</button>
      </form>
    </>
  );
};

export default Input
