import React from 'react';
import { constants } from '../../utils';
import './header.scss';

const Header = (): JSX.Element => {
	return (
		<header className="header">
			<h1>{constants.MESSAGES.HEADER.TITLE}</h1>
		</header>
	);
};

export default Header;
