import React from 'react';
import '../styles/itemForm.scss';

class ItemForm extends React.Component {
    state = {
        name: "",
        price: "",
        description: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlSubmit = (e) => {
        let {add, id} = this.props;
        let {name, price, description} = this.state;
        e.preventDefault();
        add(id, name, price, description);
        this.setState({
            name: "",
            price: 0.00,
            description: ""
        })
    }

    render() {
        let {name, price, description} = this.state
        let {showForm} = this.props;
        return(
            <form className="dish-form" onSubmit={this.handlSubmit}>
                <div className="close-form" onClick={showForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
                </div>
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
                <textarea
                    name="description"
                    placeholder="Description:"
                    value={description}
                    className="description"
                    required
                    onChange={this.handleChange}
                />
                <button className="submit">Add Item</button>
            </form>
        )
    }
}




export default ItemForm;