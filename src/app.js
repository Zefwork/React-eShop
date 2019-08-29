import React from 'react';
import Generate from './generator/generate';

export default class extends React.Component{
  state = {
    products: [
      {
        id: 100,
        title: 'iPhone',
        price: 12000,
        rest: 10,
        current: 0
      },
      {
        id: 101,
        title: 'Samsung',
        price: 22000,
        rest: 5,
        current: 0
      },
      {
        id: 102,
        title: 'Xiaomi',
        price: 14000,
        rest: 8,
        current: 0
      },
      {
        id: 103,
        title: 'Huawei',
        price: 11000,
        rest: 7,
        current: 0
      }
    ]
  }

  changeCnt(i, cnt) {
    let newProducts = [...this.state.products];
    let newProduct = {...newProducts[i]};
    newProduct.current = cnt;
    newProducts[i] = newProduct;
    this.setState({ products: newProducts});
  }

  removeItem(i) {
    let newProducts = [...this.state.products];
    newProducts.splice(i, 1);
    this.setState({ products: newProducts });
  }

  render() {

    let productsRows = this.state.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <Generate min={1}
              max={product.rest}
              cnt={product.current}
              onChange={(cnt) => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <button onClick={() => this.removeItem(i)}>Remove</button>
        </tr>
      );
    });

    let total = this.state.products.reduce((t, pr) => {
      return t + (pr.current * pr.price);
    }, 0);

    return (
      <div>
        <h2>Cart</h2>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
            </tr>
            {productsRows}
            {total}
          </tbody>
        </table>
      </div>
    );
  }
}