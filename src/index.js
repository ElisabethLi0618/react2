
import React from 'react';
import ReactDOM from 'react-dom';


// props

// 1，函数组件 此处用的是箭头函数
// const Hello = props => {
//     //props 是一个对象
//     console.log(props)
//     return(
//         <div>
//             <h1>props: {props.name} </h1>
//         </div>
//     )
// }

//2，类 class 组件
 
//也是先接收数据
class Hello extends React.Component {
    //推荐使用props作为的 constrctor 参数
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        console.log('render', this.props)
        return(
            <div>
                <h1>props:{this.props.name}</h1>
            </div>
        )
    }
}

//这里是传递数据的
ReactDOM.render(<Hello 
    name="rose" 
    age={18} 
    colors={['red','green', 'blue']}
    fn={() => console.log('这是一个函数')}
    tag={ <p>这是一个标签</p> }
    />, document.getElementById('root'))


