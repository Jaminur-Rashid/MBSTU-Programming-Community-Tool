import React, { Component } from 'react';
import useHistory from 'react-router-dom'

//an example of class type component

class PropsEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {

  }
  render() {
    return (
    <p>This is example component</p>
    );
  }
}

  export default PropsEx;