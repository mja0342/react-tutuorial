import React, { Component } from 'react';
import Child from "./Child";
import FunctionalDemo2 from "./FunctionalDemo2";

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>I am parent Component</h1>
                <Child Title="I am text from Parent Component"/>
                <FunctionalDemo2 Title="I am Text for function Component" />
            </div>
        );
    }
}
