import React,{Component} from 'react';
import './App.css';
import User from './User';
//เชื่อมหน้า
import {connect} from'react-redux';

class App extends Component {
  render(){
  return (
    <div>
      <User username={this.props.user.name}/>
      <button onClick={()=>this.props.setName("aaaaa")}>ChangeName</button>
    </div>
  );
}
}
//เปลี่ยน state เป็น props
const mapStatetoProp=(state)=>{
  return{
    user:state.user,
    emp:state.emp
  }
}

const mapDispatchtoProp=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload: name
      })
    }
  }
}


export default connect(mapStatetoProp,mapDispatchtoProp)(App);