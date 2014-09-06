/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
	  render: function() {
	    return (
	      <div className="commentBox">
					<CommentList />
					<CommentForm />
	        Hello, world! I am a CommentBox.
	      </div>
	    );
	  }
	});
		React.renderComponent(
		  <CommentBox />,
		  document.getElementById('app')
		);
});


// tutorial2.js
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
					<Comment author="Pete Hunt">This is one comment</Comment>
	        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});
//form
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// tutorial5.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Welcome user.." />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  React.renderComponent(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);
