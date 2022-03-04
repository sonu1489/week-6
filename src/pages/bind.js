import React, { Component } from "react";

class Bind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ message: "goodbye" });
  }
  //     ********* or********

  //   handleChange = (e) => {
  //     this.setState({ message: "goodbye" });
  //   };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <div className="container mt-5 col-9 col-md-6 ">
        <div>
          <h1>{this.state.message}</h1>
          {/* <button className="bg-primary" onClick={this.handleChange.bind(this)}>
            click
          </button> */}
          <button className="bg-primary" onClick={this.handleChange}>
            click
          </button>
        </div>
        {this.state.items.map((item) => {
          const { title, body } = item;
          return (
            <div key={item.id}>
              <h2>{title}</h2>
              <div>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Bind;
