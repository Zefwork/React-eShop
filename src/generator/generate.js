import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static defaultProps = {
    onChange: function(cnt){}
  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func
  }

  state = {
    inputValue: this.props.cnt
  };

  decrease = () => {
    this.set(this.props.cnt - 1);
    event.preventDefault();
  }

  increase = () => {
    this.set(this.props.cnt + 1);
    event.preventDefault();
  }

  handleChange(newStr) {
    this.setState({ inputValue: newStr })
  }

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.setState({
      inputValue: cnt
    });

    this.props.onChange(cnt);
  }

  applyValue = () => {
    let cnt = parseInt(this.state.inputValue);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  }

  render() {
    return (
      <form>
        <button onClick={this.decrease}>-</button>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
          onBlur={this.applyValue}
        />
        <button onClick={this.increase}>+</button>
      </form>
    );
  }
}