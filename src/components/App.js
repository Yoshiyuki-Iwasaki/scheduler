import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return(
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>

        <div className="form-groupe">
          <label htmlFor="formEventTitle">タイトル</label>
          <input id="formEventTitle" className="form-control" />
        </div>

        <div className="form-groupe">
          <label htmlFor="formEventBody">本文</label>
          <textarea id="formEventBody" className="form-control" />
        </div>

        <button className="btn btn-primary">イベントを作成</button>
        <button className="btn btn-danger">イベントを全て削除</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>本文</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default App;
