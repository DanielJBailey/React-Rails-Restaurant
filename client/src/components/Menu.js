import React, {Component} from 'react'
import axios from 'axios';
import ItemForm from './ItemForm';
import '../styles/menu.scss';



class Menu extends Component {
    state={
        items: []
    }

    componentDidMount() {
        let {id} = this.props
        axios.get(`/api/menus/${id}/items`)
        .then(res => {
            this.setState({
                items: res.data
            })
        })
    }

    addItem = (id, name, price, description) => {
        axios.post(`/api/menus/${id}/items`, { name, price, description })
        .then(res => {
            let {items} = this.state;
            this.setState({
                items: [...items, res.data]
            });
        })
    }

    deleteItem = (menu_id, id) => {
        axios.delete(`/api/menus/${menu_id}/items/${id}`)
        .then( res => {
            const {items} = this.state;
            this.setState({
                items: items.filter(item => 
                    item.id !== id
                )
            })
        })
    }

    render() {
        let {id, edit, add, showForm} = this.props;
        let {items} = this.state;
        return(
            <>
                <div className="menu">
                    {add ? <ItemForm id={id} add={this.addItem} showForm={showForm}/>: null}
                    
                    {items.map(item => 
                        <div key={item.id} className="item">
                            <h2 className="item-name">{item.name}</h2>
                            <p className="price">${item.price.toFixed(2)}</p>
                            <p className="description">{item.description}</p>
                            {edit ? <button onClick={() => this.deleteItem(id, item.id)} className="delete">Delete</button> : null}
                            
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export default Menu;