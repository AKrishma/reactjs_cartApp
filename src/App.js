import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Book from './component/book';
import Cart from './component/Cart';

/*
  - data Binding
  -
*/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        myText: "React session",
       // myBookColln : books,
        myCart: []
    }
    this.styles = {
       wrapDiv: { margin: '10px', padding: '5px', background: '#ccc'}
    }
  }

  //this.handleChange = handleChange.bind(this);
  /* componentDidMount() {
    // server side communication or to load the data properlu, which hasto be  presented.
    setTimeout(() => {
      let books = [
        {title: 'Data modeling architechture', Price: '1500' },
        {title: 'The Mind map' , Price: '2500'},
        {title: 'Introduction to General stystem Thinking', Price: '6000' },
        {title: 'The Flow Theory', Price: '2000' }
      ]
      this.setState({

      })
    },3000);
  } */
  handleChange = (e) => {
    this.setState({
      myText: e.target.value
    })
  }
  handleAddToCart = (item) => {
    let cart = this.state.myCart
    cart.push(item)
    this.setState({
      myCart: cart
    }) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style ={ this.styles.wrapDiv}>
          <input type='text' value={this.state.myText}  onChange={this.handleChange} />
        <p> you said: {this.state.myText}</p>
        </div>
        <div>
           <Book data={{title: 'Data modeling architechture', Price: '1500' }} onAddToCart={this.handleAddToCart}/>
          <Book data={{title: 'The Mind map' , Price: '2500'}} />
          <Book data={{title: 'Introduction to General stystem Thinking', Price: '6000' }} />
          <Book data={{title: 'The Flow Theory', Price: '2000' }} /> 
        {/*   {
            (this.state.myBookColln.length)>0 ? 
            this.state.myBookColln.map(book,index) => {
              return (
                <Book data= {book} onAddToCart={this.handleAddToCart} />
              )
            }):'Loading...!'
          } */}
        </div>
      <div>
        {`You have ${this.state.myCart.length} number of checkout`}
      </div>
      <div>
        <Cart item={this.state.myCart} />
      </div>
        
      </div>
    );
  }
}

export default App;
