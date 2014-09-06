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
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});
