import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeaveItem from '../leaves/LeaveItem';
//import CommentForm from './CommentForm';
//import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
import { getLeaves } from '../../actions/postActions';

class Leave extends Component {
  componentDidMount() {
    this.props.getLeave(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.leave;
    let LeaveContent;

    if (leave === null || loading || Object.keys(leave).length === 0) {
      LeaveContent = <Spinner />;
    } else {
      LeaveContent = (
        <div>
          <LeaveItem leave={leave} showActions={false} />
          <CommentForm leaveId={leave._id} />
          <CommentFeed leaveId={leave._id} comments={leave.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {LeaveContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Leave.propTypes = {
  getLeave: PropTypes.func.isRequired,
  leave: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  leave: state.leave
});

export default connect(mapStateToProps, { getLeave })(Leave);
