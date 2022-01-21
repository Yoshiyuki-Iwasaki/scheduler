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
        <div className="form-groupe">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            id="formEventTitle"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-groupe">
          <label htmlFor="formEventBody">本文</label>
          <textarea
            id="formEventBody"
            className="form-control"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成
        </button>
        <button className="btn btn-danger">イベントを全て削除</button>
      </form>
    </>
  );
};

export default Input
