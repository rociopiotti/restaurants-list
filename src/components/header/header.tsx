import React from 'react';
import { constants } from '../../utils';
import './Header.scss';

const Header = (): JSX.Element => {
	return (
		<header className={constants.CLASSNAMES.HEADER.TITLE}>
			<h1>{constants.MESSAGES.HEADER.TITLE}</h1>
		</header>
	);
};

export default Header;
