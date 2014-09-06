/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
	  render: function() {
	    return (
	      <div className="commentBox">
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
