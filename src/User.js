import React,{Component} from 'react';

export default class User extends Component {
  render(){
  return (
    <div>
      <h1>Hello : {this.props.username} </h1>
    </div>
  );
}
}