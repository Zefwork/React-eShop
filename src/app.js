import React from 'react';
import MinMax from './inputs/minmax/minmax';
import styles from './app.module.css'
import { Button } from 'react-bootstrap';

export default class extends React.Component{
  state = {
    products: getProducts(),
    formDone: false
  }

  changeCnt(i, cnt) {
    let products = [...this.state.products];
    products[i] = {...products[i], current: cnt};
    this.setState({products});
  }

  removeItem(i) {
    let products = [...this.state.products];
    products.splice(i, 1);
    this.setState({ products });
  }

  sendForm = () => {
    this.setState({formDone: true});
  }

  render() {
    let total = this.state.products.reduce((t, pr) => {
      return t + (pr.current * pr.price);
    }, 0);

    let productsRows = this.state.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <MinMax min={1}
              max={product.rest}
              cnt={product.current}
              onChange={(cnt) => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <button onClick={() => this.removeItem(i)}>X</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        {this.state.formDone ? showCongrats() : showForm(productsRows, total, this.sendForm)}
      </div>
    );
  }
};

function showForm(productsRows, total, onSend) {
  return (
    <div>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {productsRows}
        </tbody>
      </table>
      <h3>Total: {total}</h3>
      <hr />
      <button onClick={onSend}>Send</button>
      <input className={styles.input}/>
      <Button
        onClick={(e) => this.setState({ inp1: 'test' })}
        variant="primary"
      >Unreal change</Button>
    </div>
  )
}

function showCongrats() {
  return (
    <div>
      <h2>Congrats order in process</h2>
    </div>
  )
}

function getProducts() {
  return [
    {
      id: 100,
      title: 'iPhone',
      price: 12000,
      rest: 10,
      current: 1
    },
    {
      id: 101,
      title: 'Samsung',
      price: 22000,
      rest: 5,
      current: 1
    },
    {
      id: 102,
      title: 'Xiaomi',
      price: 14000,
      rest: 8,
      current: 1
    },
    {
      id: 103,
      title: 'Huawei',
      price: 11000,
      rest: 7,
      current: 1
    }
  ]
};