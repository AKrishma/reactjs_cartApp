import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
       // this.handleAddToCart = this.handleAddToCart.bind(this)
        this.styles = {
            outerDiv : { margin: '10px', padding: '15px', background: '#fcf', display: 'inline-grid' },
            price : { padding: '10px', background: '#00f', color: '#fff'},
            btnstyle : { color:'#000', background: '#foo', padding: '5px', display: 'inline-block' }
        }
    }
    static propTypes = {
        data: PropTypes.object.isRequired,
        onAddToCart: PropTypes.func.isRequired
    }

    handleAddToCart = (e) => {
        this.props.onAddToCart({title: this.props.data.title, price: this.props.data.price})
    }
   
    render() {
    return(
        <div style= {this.styles.outerDiv}>
            <h3>{this.props.data.title}</h3>
            <p style={this.styles.price}>{this.props.data.Price}</p>
            <button style={this.styles.btnstyle} onClick={this.handleAddToCart} > {'Add to Cart'} </button>
        </div>
    );
    }
}