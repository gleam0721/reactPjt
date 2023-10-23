/* eslint-disable */ //warning msg 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /* 자주 변경하는 데이터의 경우 -> state
     아니면 변수선언
   */
  let post = '포스트 제목';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']); 
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <button onClick={ ()=> {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      } }>가나다순정렬</button>

      <button onClick={ ()=>{ 
        let copy = [...글제목]; // 그냥 글제목 넣으면 동작안함 [...글제목] 이렇게 사용
        copy[0] = '여자코트 추천'
        글제목변경(copy); 
      } }>글수정</button> 

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>❤</span> {따봉} </h4>
        <p>10월 23일 발행 </p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>10월 23일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>10월 23일 발행</p>
      </div>
    </div>
  );
}

export default App;
