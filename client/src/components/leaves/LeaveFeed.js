import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
//import { getPosts } from '../../actions/postActions';
import { getLeaves, getAllLeaves } from '../../actions/leaveActions';


//import LeaveForm from './LeaveForm';

class Posts extends Component {
  componentDidMount() {

    const { user } = this.props.auth;
    console.log(user)
    if(user.userType === 'dean' || user.userType === 'a-r' || user.userType === 'hod'){
      this.props.getAllLeaves(user.userType);
    }else {
      this.props.getLeaves(user.id);
    }
    
  }

  render() {
    console.log("asdasda", this.props.post)
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <PostForm /> */}
             
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getLeaves: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps, { getLeaves, getAllLeaves })(Posts);
