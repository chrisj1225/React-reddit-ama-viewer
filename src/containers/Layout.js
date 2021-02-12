import React, { Component } from 'react';
import axios from 'axios';

import classes from './Layout.module.css';
import Logo from '../components/Logo/Logo';
import AuthorRemark from '../components/AuthorRemark/AuthorRemark';
import InputLink from '../components/InputLink/InputLink';
// import InputNumPosts from '../components/InputNumPosts/InputNumPosts';
import Question from '../components/Question/Question';
import CurrentPost from '../components/CurrentPost/CurrentPost';
import Modal from '../components/UI/Modal/Modal';

class Layout extends Component {
  state = {
    // numPosts: 10,
    redditLink: "",
    title: "Reddit AMA Title",
    author: "Author Name",
    authorRemarks: [],
    posts: [],
    selectedQ: "",
    selectedQAnswer: "",
    finished: true,
    error: false
    // authorRemarks is an array of objects w/ keys remarks, id
    // posts is an array of objects w/ keys question, id, answer
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[componentDidUpdate]')
    if (prevState.redditLink !== this.state.redditLink) {
      axios.get(this.state.redditLink)
        .then(response => {
          const originalPost = response.data[0].data.children[0].data;
          const commentSection = response.data[1].data.children;
          const compiledRemarks = [];
          const compiledPosts = [];
          console.log(commentSection.length);
          for (let i = 0; i < (commentSection.length); i++) {
            if (commentSection[i].data.author && commentSection[i].data.replies) {
              if ((commentSection[i].data.author !== originalPost.author) && (commentSection[i].data.replies.data.children[0].data.author === originalPost.author)) {
              
                const newPost = {
                  commenter: commentSection[i].data.author,
                  question: commentSection[i].data.body,
                  id: commentSection[i].data.id,
                  answer: commentSection[i].data.replies.data.children[0].data.body
                }
                compiledPosts.push(newPost);
  
              } else if (commentSection[i].data.author === originalPost.author) {
                
                const newRemark = {
                  remark: commentSection[i].data.body,
                  id: commentSection[i].data.id
                }
                compiledRemarks.push(newRemark);
  
              }
            }
          }
          this.setState({
            title: originalPost.title,
            author: originalPost.author,
            authorRemarks: compiledRemarks,
            posts: compiledPosts
          });
          console.log(this.state);
        })
        .catch(error => {
          console.log(error)
          this.setState({error: true});
          // Use this.state.error to fire error message.
        });
    }
  }

  addLinkHandler = (currentValue) => {
    const link = currentValue + '.json';
    this.setState({redditLink: link});
    // console.log(currentValue);
    // console.log(this.state.redditLink);
  }

  // inputNumHandler = (inputNum) => {
  //   this.setState({numPosts: inputNum});
  // }

  selectQuestionHandler = (id) => {
    const QAArray = this.state.posts;
    const selectIndex = (ele) => ele.id === id;
    const selectedIndex = QAArray.findIndex(selectIndex);
    const selectedObj = QAArray[selectedIndex];

    this.setState({
      selectedQ: selectedObj.question,
      selectedQAnswer: selectedObj.answer,
      finished: false});
    console.log(selectedIndex);
  }

  finishHandler = () => {
    this.setState({finished: true});
  }

  render () {
    let questions = <p>There is nothing here yet!</p>;
    if (this.state.redditLink.length > 0) {
      questions = this.state.posts.map(post => {
        return <Question 
          commenter={post.commenter}
          question={post.question}  
          clicked={this.selectQuestionHandler}
          id={post.id}
          key={post.id}
        />
      });
    }
    
    let remarks = <p>The author did not have any remarks.</p>
      if (this.state.authorRemarks.length > 0) {
        remarks = this.state.authorRemarks.map(post => {
          return <AuthorRemark 
            remark={post.remark}
            author={this.state.author}
            key={post.id}
          />
        })
      }

    return (
    <div>
      <Logo />
      <h2 className={classes.Title}>AMA Title: {this.state.title}</h2>
      <h3>Author: u/{this.state.author}</h3>
      <InputLink 
        addLink={this.addLinkHandler}
        />
      {/* <InputNumPosts 
        addNumPosts={this.inputNumHandler}
        /> */}
      <p><strong>Author Remarks: </strong></p>
      {remarks}
      <Modal 
        show={!this.state.finished}
        modalClosed={this.finishHandler}>
        <CurrentPost 
          question={this.state.selectedQ}
          answer={this.state.selectedQAnswer}
          clicked={this.finishHandler} />
      </Modal> 
      <hr/>
      <section >
       {questions}
      </section> 
    </div>
    );
  }
}

export default Layout;
