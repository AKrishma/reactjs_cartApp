import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            outerDiv : { margin: '10px', padding: '15px', background: '#fcf', display: 'inline-grid' },
            btnstyle : { color:'#fff', background: '#f00', padding: '10px' }
          
        }
    }

    render() {
    return(
            <button style={this.styles.btnstyle} onClick={this.handleCheckout}>{'Checkout'} </button>
    );
    }
}