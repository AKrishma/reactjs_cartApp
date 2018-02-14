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
    this.handleChange = this.handleChange.bind(this);
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
  DisplayBooks =(props) => {
    let booklist;
    console.log(props.books);
    (myBookColln.length)>0 ? 
      booklist = props.books.map((book) => {
      return (
        <Book data= {book} onAddToCart={this.handleAddToCart} />
      )
    }):'Loading...!'
      return (
       {booklist} 
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
          <Book data={{title: 'Data modeling architechture', author:'', Price: '1500', publisher: '', publish_year: '', quantity: '5' }} onAddToCart={this.handleAddToCart}/>
          <Book data={{title: 'The Mind map' ,author:'', Price: '2500', publisher: '', publish_year: '', quantity: '6' }} onAddToCart={this.handleAddToCart} />
          <Book data={{title: 'Introduction to General stystem Thinking',author:'', Price: '6000', publisher: '', publish_year: '', quantity: '10'  }} onAddToCart={this.handleAddToCart} />
          <Book data={{title: 'The Flow Theory', author:'',Price: '2000', publisher: '', publish_year: '', quantity: '7'  }}  onAddToCart={this.handleAddToCart} />
         

    
          {/* <DisplayBooks  books= {myBookColln} /> 
          <Book data={{title: 'The Mind map1' ,author:'', Price: '2500', publisher: '', publish_year: '', quantity: '6' }} onAddToCart={this.handleAddToCart} /> */}
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
const myBookColln = [
  {title: 'Data modeling architechture', author:'', Price: '1500', publisher: '', publish_year: '', quantity: '5'  },
  {title: 'The Mind map' ,author:'', Price: '2500', publisher: '', publish_year: '', quantity: '6' },
  {title: 'Introduction to General stystem Thinking',author:'', Price: '6000', publisher: '', publish_year: '',quantity: '10'  },
  {title: 'The Flow Theory', author:'',Price: '2000', publisher: '', publish_year: '',quantity: '7'  }
];  
export default App;
