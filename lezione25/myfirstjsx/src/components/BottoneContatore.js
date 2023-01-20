import React from "react";

class BottoneContatore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 10,
        negativ: -1
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} add</p>
          <p>You clicked {this.state.negativ} negativ</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
          <button onClick={() => this.setState({ negativ: this.state.negativ - 1 })}>
            -
          </button>
        </div>
      );
    }
  }

  export default BottoneContatore;