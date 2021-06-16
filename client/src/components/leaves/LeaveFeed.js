import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeaveItem from './LeaveItem';

class LeaveFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <LeaveItem key={post._id} post={post} />);
  }
}

LeaveFeed.propTypes = {
  leaves: PropTypes.array.isRequired
};

export default LeaveFeed;
