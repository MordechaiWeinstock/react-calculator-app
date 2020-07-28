import React from 'react';
import './App.css';
import Button from './components/Button';
import { evaluate } from 'mathjs';

class App extends React.Component {
    state = {
        keys: [
            {value: "AC", type: "clear AC"},
            {value: "/", type: "operator"},
            {value: "7", type: "number"},
            {value: "8", type: "number"},
            {value: "9", type: "number"},
            {value: "*", type: "operator"},
            {value: "4", type: "number"},
            {value: "5", type: "number"},
            {value: "6", type: "number"},
            {value: "-", type: "operator"},
            {value: "1", type: "number"},
            {value: "2", type: "number"},
            {value: "3", type: "number"},
            {value: "+", type: "operator"},
            {value: "0", type: "number zero"},
            {value: ".", type: "number"},
            {value: "=", type: "operator"}
        ],
        display: "0",
        temp: "",
        operator: ""
    }

    displayHandler = (e) => {
        if (e === "AC") {
            this.setState({ display: "0" });
        } else if (e === "=") {
            console.log((evaluate([this.state.display, this.state.operator, this.state.temp].join(""))));
            this.setState({ display: (evaluate([this.state.display, this.state.operator, this.state.temp].join(""))), temp: "", operator: "" });
            // maybe the above can be combined with the below with all other operators
        } else  /* if ("/*-+".includes(e)) {
// this commented out part is to add functionality:
// so the operators don't show up on display,
// after pressing an operator when next number is pressed clear the display first,
            this.setState({ operator: e, temp: this.state.display});
            this.setState({ display: (evaluate([this.state.display, this.state.operator, this.state.temp].join(""))), temp: this.state.display, operator: e});
        } else  */{
            this.setState(prevState => {
                if (prevState.display === "0") {
                    return ({ display: e });
                } else {
                    return ({ display: prevState.display + e });
                }
            });
// add functionality for ac/c (check out iphone calc)
// add functionality for only 1 dot in any display at once
// add iphone css from codepen...
        }
    }

    render () {
        return (
            <div className="wrapper">
                <div className="display">
                    {this.state.display}
                </div>
                <div className="keypadWrapper">
                    {this.state.keys.map(key => <Button keyProps={key} displayHandler={this.displayHandler} key={key.value}/>)}
                </div>
            </div>
        )
    }
}

export default App;