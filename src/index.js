import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//สร้าง State
const initialState ={
    //state 2ตัว 
    result:15000,
    value:[]
}





const userReducer=(state={name:"Oven",age: 15},action)=>{
    switch (action.type){
        case "setName":
           state={
               //แสดงค่า state ทุกตัว
              ...state,
              name:action.payload
              //ใส่ stateใน array
           }
        break;
        case"setAge":
        state={
            //แสดงค่า state ทุกตัว
           ...state,
            age:action.payload
        }
        break;
        default:
    }
    return state;
}

const employeeReducer=(state=initialState,action) => {
    //ตรวจเช็ต action
    switch (action.type){
        case "ADD":
           state={
               //แสดงค่า state ทุกตัว
              ...state,
              result: state.result+=action.payload,
              //ใส่ stateใน array
              value: [...state.value,action.payload]
           }
        break;
        case"SUBTRACT":
        state={
            //แสดงค่า state ทุกตัว
           ...state,
           result: state.result-=action.payload,
           //ใส่ stateใน array
           value: [...state.value,action.payload]
        }
        break;
        default:
    }
    return state;
}

const mylogger=(store)=>(next)=>(action)=>{
    console.log("Log Action",action);
    next(action);
}

const store=createStore(combineReducers({emp:employeeReducer,user:userReducer}),{},applyMiddleware(mylogger));
//ตามค่า state
store.subscribe(()=>{
    //store.getState รับค่า state
    console.log("update stote:",store.getState())
})
//เปลี่ยนค่า state
/*
store.dispatch({
    type:"ADD",
    payload:15000
});

store.dispatch({
    type:"setName",
    payload:"redux"
})

store.dispatch({
    type:"setAge",
    payload:"20"
});*/



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));