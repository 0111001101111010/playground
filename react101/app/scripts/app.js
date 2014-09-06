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
        " Hello, world! I am a CommentList. ",
					Comment( {author:"Pete Hunt"}, "This is one comment"),
	        Comment( {author:"Jordan Walke"}, "This is *another* comment")
      )
    );
  }
});
//form
var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.div( {className:"commentForm"}, 
        " Hello, world! I am a CommentForm. "
      )
    );
  }
});

// tutorial5.js
var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    return (
      React.DOM.div( {className:"comment"}, 
        React.DOM.h2( {className:"commentAuthor"}, 
          this.props.author
        ),
        this.props.children
      )
    );
  }
});

var HelloWorld = React.createClass({displayName: 'HelloWorld',
  render: function() {
    return (
      React.DOM.p(null, 
        " Hello, ", React.DOM.input( {type:"text", placeholder:"Welcome user.."} ),"! "+
        "It is ", this.props.date.toTimeString()
      )
    );
  }
});

setInterval(function() {
  React.renderComponent(
    HelloWorld( {date:new Date()} ),
    document.getElementById('example')
  );
}, 500);
