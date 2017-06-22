import React from 'react';

const User = (props) => {
	return (
		<div>
			<h3>This is User page</h3>
			<div>The name is {props.detail}</div>
		</div>
	)
};

export default User;