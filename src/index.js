
import React from 'react';
import ReactDOM from 'react-dom';


// 父组件
class Parent extends React.Component {
    state ={
        lastName: '李'
    }

    render(){
        return(
            <div className="parent">
                父组件：
                <Child name={this.state.lastName} />
            </div>
        )
    }
}

//子组件
const Child = props => {
    console.log('子组件',props)
    return(
        <div className="child">
            {/* 父组件的数据就是state的数据 李 */}
            <p>子组件，接收到父组件的数据:{props.name} </p>
        </div>
    )

}

ReactDOM.render(<Parent />, document.getElementById('root'))


