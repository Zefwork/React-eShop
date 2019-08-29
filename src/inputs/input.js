import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  state = {
    cnt: this.props.min
  };

  decrease = () => {
    this.set(this.state.cnt - 1);
    event.preventDefault();
  }

  increase = () => {
    this.set(this.state.cnt + 1);
    event.preventDefault();
  }

  handleChange(newStr){
    let cnt = parseInt(newStr);

    if(isNaN(cnt)) {
      cnt = this.props.min
    }

    this.set(cnt);
    event.preventDefault();
  }

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.setState({ cnt });
  }

  render() {
    return (
      <form>
        <button onClick={this.decrease}>-</button>
        <input 
          type="text"
          value={this.state.cnt}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={this.increase}>+</button>
      </form>
    );
  }
}