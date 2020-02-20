import React, { Component } from 'react'
import Head from "./Components/Head/Head";
import Title from "./Components/Title/Title";
import Main from "./Components/Main/Main";


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }




  render() {
    return (
      <div>
        <Head />
        <Title />
        <Main />

      </div>
    )
  }
}

export default App;
