import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  // note: updateCount must be called here, not in the child component,
  // so that we have the correct context for this to access the state
  render() {
    return (
      <Child handleClick={() => this.updateCount()} count={this.state.count}>
        Count
      </Child>
    );
  }
}

// props must be accessed with "this" in class components
class Child extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.children}: {this.props.count}
      </button>
    );
  }
}

const ExamplePage2 = () => <Parent />;

export default ExamplePage2;
