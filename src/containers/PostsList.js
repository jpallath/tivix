import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, addPost } from "../store/actions/post";
import AddPostData from "../components/addPostData";
import Post from "../components/post";
import { PostsListBox, ButtonContainer } from "../styledComponents/styles";

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let { user } = this.props.params;
        this.props.currentUser
            ? this.props.fetchPosts(this.props.currentUser)
            : this.props.fetchPosts(user);
    }

    addPost(title, body) {
        let { currentUser } = this.props;
        let newPost = {
            userId: currentUser,
            title: title,
            body: body
        };
        this.props.addPost(newPost);
    }

    showComponent = name => {
        let { minTitle, maxTitle, minBody, maxBody, posts } = this.props;
        let filteredComponent = [];
        if (name === "min title") {
            filteredComponent = posts.filter(post => {
                return post.title === minTitle.title;
            });
        } else if (name === "max title") {
            filteredComponent = posts.filter(post => {
                return post.title === maxTitle.title;
            });
        } else if (name === "min body") {
            filteredComponent = posts.filter(post => {
                return post.title === minBody.title;
            });
        } else if (name === "max body") {
            filteredComponent = posts.filter(post => {
                return post.title === maxBody.title;
            });
        } else if (name === "reset") {
            filteredComponent = posts;
        }
        this.setState({ filteredComponent });
    };

    render() {
        let { posts } = this.props;
        let { filteredComponent } = this.state;
        let list = [];
        filteredComponent
            ? (list = filteredComponent.map(post => {
                  return <Post key={post.id} {...post} />;
              }))
            : (list = posts.map(post => {
                  return <Post key={post.id} {...post} />;
              }));
        return (
            <PostsListBox>
                <h1>Posts</h1>
                {list}
                <AddPostData flow={this.addPost.bind(this)} />
                <ButtonContainer>
                    <button onClick={() => this.showComponent("min title")}>
                        Min Title
                    </button>
                    <button onClick={() => this.showComponent("max title")}>
                        Max Title
                    </button>
                    <button onClick={() => this.showComponent("min body")}>
                        Min Body
                    </button>
                    <button onClick={() => this.showComponent("max body")}>
                        Max Body
                    </button>
                    <button onClick={() => this.showComponent("reset")}>
                        Reset
                    </button>
                </ButtonContainer>
            </PostsListBox>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        currentUser: reduxState.users.currentUser,
        posts: reduxState.posts.posts,
        minBody: reduxState.posts.minBody,
        minTitle: reduxState.posts.minTitle,
        maxBody: reduxState.posts.maxBody,
        maxTitle: reduxState.posts.maxTitle
    };
}

export default connect(mapStateToProps, { fetchPosts, addPost })(PostsList);
