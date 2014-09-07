 var App = React.createClass({
    getInitialState: function() {
      return {userInput: ''};
    },
    handleChange: function(e) {
      this.setState({userInput: e.target.value});
    },
    clearAndFocusInput: function() {
      this.setState({userInput: ''}); // Clear the input
      // We wish to focus the <input /> now!
    },
    render: function() {
      return (
        <div>
          <div onClick={this.clearAndFocusInput}>
            Click to Focus and Reset
          </div>
          <input
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  });
