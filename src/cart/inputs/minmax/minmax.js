import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../lazy/lazy';

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

  decrease = () => {
    this.set(this.props.cnt - 1);
  }

  increase = () => {
    this.set(this.props.cnt + 1);
  }

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);

    this.props.onChange(cnt);
  }

  onChange = (e) => {
    let cnt = parseInt(e.target.value);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <AppLazyInput
          nativeProps={{type: 'text'}}
          value={this.props.cnt}
          onChange={this.onChange}
        />
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}