import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Content from './components/content'
import TableRow from './components/table'

var myStyle ={
    fontSize: 100,
    color: '#FF0000'
}

class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
      this.forceUpdate();
    };
    render(){
        return (
            <div>
              <button onClick = {this.forceUpdateHandler}>Set State</button>
              <h4>State Array: {Math.random()}</h4>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)