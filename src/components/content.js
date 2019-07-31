import React from 'react';

class Content extends React.Component{

    render() {
        return (
            <div>
                <h1>{this.props.contentProp}</h1>
            </div>
        )
    }
}

export default Content;