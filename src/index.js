
import React from 'react';
import ReactDOM from 'react-dom';


//表单处理 非受控组件
class App extends React.Component {
  // 初始化状态
  state ={
    comments:[
      { id:1, name:'jack',content:'沙发！！！'},
      { id:2, name:'rose',content:'楼主好帅'},
      { id:3, name:'tom',content:'小板凳'}
    ],

    // 准备状态  评论人
    userName:'',
    
    //准备状态  评论内容
    userContent:''
  }
  // 渲染评价列表：
  renderList(){
    // if else 作为判断
    if(this.state.comments.length === 0){
      return <div className="no-comment">暂无评论，快去评论吧</div>
    }
    return(
      <ul>
        {this.state.comments.map(item =>(
          <li key={item.id}>
            <h3>评论人：{item.name} </h3>
            <p>评论内容:{item.content} </p>
          </li>
        ))}
      </ul>
    )
  }

  //处理表单元素值
  handleForm = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]:value
    })
  }

  //发表评论
  addComment =() => {
    const{ comments,userName, userContent } = this.state
    const newComments =[
      {
        id: Math.random(),
        name:userName,
        content:userContent
      },
      ...comments
    ]

    //console.log(newComments);
    this.setState({
      comments:newComments
    })
  }
  
  render(){
    const {userName, userContent } = this.state
    return(
      <div className="App">
        <div>
          <input className="user" type="text"  placeholder="请输入评论人" value={userName} name="userName" onChange={this.handleForm} />
          <br />
          <textarea
           className="content"
           cols="30"
           rows="10"
           placeholder="请输入评论内容" 
           value={userContent}
           name="userContent"
           onChange={this.handleForm}
           />
           <br />
           <button onClick={this.addComment}>发表评论</button>
        </div>
        {/* 通过条件渲染 决定渲染什么内容 */}
        {this.renderList()}
      </div>
    )
  }
}

//渲染组件
ReactDOM.render(<App />, document.getElementById('root'))


