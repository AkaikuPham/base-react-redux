import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Long Pham',
        address: 'Ha Noi',
        age: 24
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} <br />
                My address is {this.state.address} <br />
                My age is {this.state.age} <br />
            </div>
        );
    }
}

export default MyComponent;