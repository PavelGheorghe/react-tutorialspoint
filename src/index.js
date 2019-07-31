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
    constructor(props){
        super(props);
        this.state={
            header:"Header from props...",
            content:"Content from props..."
        }
    }
    render(){
        return (
            <div>
            <Header headerProp={this.state.header} />
            <Content contentProp={this.state.content} />
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)