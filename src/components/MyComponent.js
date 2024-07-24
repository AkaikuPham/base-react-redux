import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Long Pham',
        address: 'Ha Noi',
        age: 24
    };

    handleClick(event) {
        console.log('Click me');

        // merge State => react class
        this.setState({
            name: 'Long My',
            age: Math.floor((Math.random() * 100) + 1),
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1),
        // })
    }

    handleOnMouseOver(event) {
        console.log('Mouse over');
        console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old.
                <br />

                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;