
import React from 'react';
import ReactDOM from 'react-dom';

// react 复习

// 1，列表渲染

// const songs = [
//     {id: 1, name: '莫扎特'},
//     {id: 2, name: '贝多芬'},
//     {id: 3, name: '我'},
// ]

// const list =(
//     <ul>
//         {songs.map(item =><li key={item.id}>{item.name}</li> )}
//     </ul>
// )

// 2，函数组件
// function Ying (){
//     return (
//         <div>这是一个函数组件，函数名首字母要大写（Y），还要有返回值 （return）</div>
//     )
// }

// 3, 箭头函数
//const Ying =() => <div>这是一个函数组件，函数名首字母要大写（Y），还要有返回值 （return）</div>

// 4,类组件class
// class Ying extends React.Component {
//     render(){
//         return <div>这是一个名为Ying 的类组件，类组件必须要提供“render（）方法”，也必须有返回值。</div>
//     }
// }

class Ying extends React.Component {
    render(){
        return  (
            <h1>这是一个类组件。</h1>
        )
    }
}

ReactDOM.render(<Ying />, document.getElementById('root'))


