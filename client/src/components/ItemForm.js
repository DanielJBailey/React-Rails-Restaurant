import React from 'react';
import '../styles/itemForm.scss';

class ItemForm extends React.Component {
    state = {
        name: "",
        price: 0.00
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlSubmit = (e) => {
        let {add, id} = this.props;
        let {name, price} = this.state;
        e.preventDefault();
        add(id, name, price);
        this.setState({
            name: "",
            price: 0.00
        })
    }

    render() {
        let {name, price} = this.state
        return(
            <form className="dish-form" onSubmit={this.handlSubmit}>
                <input 
                    name="name"
                    placeholder="Dish Name:"
                    value={name}
                    className="input"
                    required
                    onChange={this.handleChange}
                />
                <input 
                    name="price"
                    placeholder="Price:"
                    value={price}
                    className="input"
                    required
                    onChange={this.handleChange}
                />
                <button className="submit">Add Item</button>
            </form>
        )
    }
}




export default ItemForm;