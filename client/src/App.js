import React, { Component } from 'react';
import './styles/app.scss';
import axios from 'axios';
import MenuList from './components/MenuList';

class App extends Component {
  state = {
    menus: []
  }

  componentDidMount() {
    axios.get('/api/menus/')
      .then(res => {
        this.setState({
          menus: res.data
        })
      })
  }

  render() {
    let { menus } = this.state;
    return (
      <>
        <MenuList menus={menus} />
      </>
    );
  }
}

export default App;
