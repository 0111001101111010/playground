/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
	  render: function() {
	    return (
	      React.DOM.div( {className:"commentBox"}, 
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
