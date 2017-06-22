import React from 'react';

const Main = (props) => {
	return (
		<div>
			<h3>This is Main page</h3>
			<button onClick={()=> props.clicked('Cholu')}>Click Me</button>
		</div>
	)
};

export default Main;