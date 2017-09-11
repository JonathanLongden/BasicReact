var React = require('react');
var createReactClass = require('create-react-class');

var LogoutUser = createReactClass({
	render: function(){
		return (
			<div>
				<button className="btn btn-primary" onClick={ this.props.logoutUser }>Log out</button>
			</div>
			)
	}
});

module.exports = LogoutUser;