import React from 'react';
import Cart from '~/cart/cart';
import Order from '~/order/order';
import Result from '~/result/result';

export default class extends React.Component {
  state = {
    products: getProducts(),
    formData: {
      name: {
        label: 'name',
        value: ''
      },
      email: {
        label: 'email',
        value: ''
      },
      phone: {
        label: 'phone',
        value: ''
      }
    },
    activeRoute: 'CART'
  }

  changeCnt = (i, cnt) => {
    let products = [...this.state.products];
    products[i] = { ...products[i], current: cnt };
    this.setState({ products });
  }

  removeItem = (i) => {
    let products = [...this.state.products];
    products.splice(i, 1);
    this.setState({ products });
  }

  changeFormData = (name, value) => {
    let formData = {...this.state.formData};
    formData[name] = {...formData[name], value};
    this.setState({formData});
  }

  moveToCart = () => {
    this.setState({ activeRoute: 'CART' });
  }

  moveToOrder = () => {
    this.setState({ activeRoute: 'ORDER' });
  }

  moveToResult = () => {
    this.setState({ activeRoute: 'RESULT' });
  }

  render() {
    let page;

    switch (this.state.activeRoute) {
      case 'CART':
        page = <Cart 
        products={this.state.products}
        onChange={this.changeCnt}
        onRemove={this.removeItem}
        onSend={this.moveToOrder}
        />
        break;

      case 'ORDER':
        page = <Order
        formData={this.state.formData}
        onChange={this.changeFormData}
        onBack={this.moveToCart}
        onSend={this.moveToResult}
        />
        break;

      case 'RESULT':
        page = <Result />
        break;

      default:
        <div>404</div>
    }

    return (
      <div className="container">
        {page}
      </div>
    )
  }
};  

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