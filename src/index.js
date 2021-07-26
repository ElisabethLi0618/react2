//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

//表单处理 非受控组件
class App extends React.Component {
  constructor(){
    super()
    //创建ref
    this.txtRef = React.createRef()
  }
  //获取文本框的值
  getTxt=()=> {
    console.log('文本框值为： ',this.txtRef.current.value);
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.txtRef} />
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    )
  }
}

//渲染组件
ReactDOM.render(<App />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
