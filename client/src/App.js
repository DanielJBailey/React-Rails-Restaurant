import React, { Component } from 'react';
import './styles/app.scss';
import axios from 'axios';
import MenuList from './components/MenuList';

class App extends Component {
  state = {
    menus: [],
    editing: false,
    menuSelected: 1,
    addingItems: false
  }

  componentDidMount() {
    axios.get('/api/menus/')
    .then(res => {
      this.setState({
        menus: res.data
      })
    })
  }

  toggleEdit = () => {
    let {editing} = this.state;
    this.setState({
      editing: !editing
    })
  }

  showMenu = (id) => {
    this.setState({
      menuSelected: id
    })
  }

  showForm = () => {
    this.setState({
      addingItems: !this.state.addingItems
    })
  }

  render() {
    let { menus, editing, menuSelected, addingItems } = this.state;
    let currentMenu = menus.filter(menu => {
      return menu.id === menuSelected
    })

    return (
      <>
        <MenuList 
          menus={menus} 
          toggle={this.toggleEdit} 
          show={this.showMenu}
          current = {currentMenu}
          editing={editing}
          selected={menuSelected}
          add={addingItems}
          showForm={this.showForm}
        />
      </>
    );
  }
}

export default App;
