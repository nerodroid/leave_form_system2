import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeaveForm from './LeaveForm';
import LeaveFeed from './LeaveFeed';
import Spinner from '../common/Spinner';
import { getLeaves } from '../../actions/leaveActions';

class Leaves extends Component {
  componentDidMount() {
    this.props.getLeaves();
  }

  render() {
    const { leaves, loading } = this.props.leave;
    let leaveContent;

    if (leaves === null || loading) {
      leaveContent = <Spinner />;
    } else {
      leaveContent = <LeaveFeed leaves={leaves} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <LeaveForm />
              {leaveContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Leaves.propTypes = {
  getLeaves: PropTypes.func.isRequired,
  leave: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  leave: state.leave
});

export default connect(mapStateToProps, { getLeaves })(Leaves);
