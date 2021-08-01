
import React from 'react';
import ReactDOM from 'react-dom';

// react 复习

// 1,事件绑定
//  1，1 类组件绑定事件
// class Ying extends React.Component {
//     // 事件处理程序
//     handleClick(){
//         console.log('点击事件触发了');
//     }
//     render(){
//         return(
//             <button onClick={this.handleClick}>点一下</button>
//         )
//     }
// }


// 1，2 函数组件绑定事件
// function App (){
    
//     function handleClick(){
//         console.log('函数组件的事件绑定，事件触发了');
//     }
//     return(
//         // 函数组件没有this 所以只需要把函数名写到花括号里就好
//         <button onClick={handleClick} >点击</button>
//     )
// }

// 2，React 事件对象
// class App extends React.Component{
//     handleClick(e){
//         // 阻止浏览器的默认行为
//         e.preventDefault()
//         console.log('a标签的单击事件触发了');
//     }
//     render(){
//         return(
//             <a href="http://itcast.cn/" onClick={this.handleClick} >传智传媒</a>
//         )
//     }
// }

// 3，state 的基本使用

// class Ying extends React.Component {
//     state={
//         count: 0
//     }
//     render(){
//         return(
//             <div>计数器：{this.state.count} </div>
//         )
//     }
// }

// 3,1 setState 的使用
// class Ying extends React.Component{
//      //state 初始状态
//      state={
//          count: 0
//      }
// 事件处理程序
//onIncrement =()=>{
//     this.setState({
//         count: this.state.count + 1     
//     })
// } 和下面不用箭头效果一样

// onIncrement(){
//     this.setState({
//         count: this.state.count + 1     
//     })
// }
//     render(){
//         return(
//             <div>
//             <h1>计数器：{this.state.count} </h1>
//             <button onClick={()=> this.onIncrement()} >+1</button>
//             </div>
            
//         )
//     }
// }

//setState 的正确用法
// this.setState({
//     count: this.state.count +1
// })

// 4，手控组件 受到React控制的表单元素  操作文本框的值：
// class Ying extends React.Component{
//     state={
//         txt:''
//     }
//     handleChange = e => {
//         this.setState({
//             txt: e.target.value
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" value={this.state.txt}  onChange ={this.handleChange} />
//             </div>
//         )
//     }
// }

class Ying extends React.Component{
    state={
        txt: '',
        content: '',
        city: 'bj',
        isChecked: false
    }
    handleForm = e =>{
        const target = e.target
        const value = target.type === 'checkbox'
        ? target.checked
        : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm} />
                <br />
                <textarea name="content" value={this.state.content} onChange={this.handleForm}/>
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

ReactDOM.render(<Ying />, document.getElementById('root'))


