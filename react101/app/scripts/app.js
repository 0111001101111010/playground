/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
	  render: function() {
	    return (
	      React.DOM.div( {className:"commentBox"}, 
					CommentList(null ),
					CommentForm(null ),
	        " Hello, world! I am a CommentBox. "
	      )
	    );
	  }
	});
		React.renderComponent(
		  CommentBox(null ),
		  document.getElementById('app')
		);
});


// tutorial2.js
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    return (
      React.DOM.div( {className:"commentList"}, 
        " Hello, world! I am a CommentList. "
      )
    );
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.div( {className:"commentForm"}, 
        " Hello, world! I am a CommentForm. "
      )
    );
  }
});
