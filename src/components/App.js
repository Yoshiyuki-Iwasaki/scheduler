import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducer';
import Event from './Event'

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    // console.log({title, body})
    // dispatch
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('');
    setBody('');
  }
  // console.log({ state });
  return(
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>

        <div className="form-groupe">
          <label htmlFor="formEventTitle">タイトル</label>
          <input id="formEventTitle" className="form-control" value={title} onChange={e=> setTitle(e.target.value)}/>
        </div>

        <div className="form-groupe">
          <label htmlFor="formEventBody">本文</label>
          <textarea id="formEventBody" className="form-control" value={body} onChange={e=> setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成</button>
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
        <tbody>
          {
            state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
