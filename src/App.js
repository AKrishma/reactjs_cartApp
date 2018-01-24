import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Book from './component/book';
import Cart from './component/Cart';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        myText: "React session",
        myBookColln : [],
        myCart: []
    }
    this.styles = {
       wrapDiv: { margin: '10px', padding: '5px', background: '#ccc'}
    }
  }

  //this.handleChange = handleChange.bind(this);
  displaybooks =(e) => {
      
      this.setState({
       // book: {books}
      })
  } 
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
  displayBooks =(props) => {
    let booklist, myBookColln = [
      {title: 'Data modeling architechture', Price: '1500' },
      {title: 'The Mind map' , Price: '2500'},
      {title: 'Introduction to General stystem Thinking', Price: '6000' },
      {title: 'The Flow Theory', Price: '2000' }
    ];
    const books = props.books;
    (myBookColln.length)>0 ? 
      booklist = myBookColln.map(books, index => {
      return (
        <Book key={index} data= {this.props.book} onAddToCart={this.handleAddToCart} />
      )
    }):'Loading...!'
      return (
        booklist
      );
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
          <Book data={{title: 'The Mind map' , Price: '2500'}} onAddToCart={this.handleAddToCart} />
          <Book data={{title: 'Introduction to General stystem Thinking', Price: '6000' }} onAddToCart={this.handleAddToCart} />
          <Book data={{title: 'The Flow Theory', Price: '2000' }}  onAddToCart={this.handleAddToCart} />  
          {/*  {
            (this.state.myBookColln.length)>0 ? 
            this.state.myBookColln.map(book, index => {
              return (
                <Book data= {this.props.book} onAddToCart={this.handleAddToCart} />
              )
            }):'Loading...!'
          }  

          <displayBooks  books= {myBookColln} /> */}
        </div>
      <div>
        {`You have selected ${this.state.myCart.length} Books for checkout`}
      </div>
      <div>
        <Cart item={this.state.myCart} />
      </div>
     {/*  <div>
      
        <FilterableProductTable products={PRODUCTS} />
      </div> */}
        
      </div>
    );
  }
}

export default App;
