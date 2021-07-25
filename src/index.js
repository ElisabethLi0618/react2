//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


class App extends React.Component {
  //简化后的版本 初始状态
  state = {
    txt: '',
    content: '',
    city: '',
    isChecked: false
  }
  handleForm = e => {
    //获取当前的DOM对象
    const target = e.target
    //根据类型不同 先判断类型再获取不同的值 用三元表达式  ？ ：
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value
  }

  render() {
    return (
      <div>
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} />
        <br />
        <textarea name="content" value={this.state.content} onChange={this.handleForm}></textarea>
        <br />
        <select name="city" value={this.state.city} onChange={this.handleForm}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="hz">杭州</option>
        </select>
        <br />
        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleForm} />
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
