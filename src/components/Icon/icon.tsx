import React from 'react';
import './Icon.scss';

// FONT-AWESOME:
import {
	faSortAlphaDown,
	faSortAlphaUp,
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faStar,
	faLocationDot,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ type, iconClass }: { [key: string]: any }): JSX.Element => {
	let faIcon;
	switch (type) {
		case 'faUtensils':
			faIcon = faUtensils;
			break;
		case 'faStar':
			faIcon = faStar;
			break;
		case 'sortAZ':
			faIcon = faSortAlphaDown;
			break;
		case 'sortZA':
			faIcon = faSortAlphaUp;
			break;
		case 'faChevronDown':
			faIcon = faChevronDown;
			break;
		case 'faChevronLeft':
			faIcon = faChevronLeft;
			break;
		case 'faChevronRight':
			faIcon = faChevronRight;
			break;
		case 'faLocationDot':
			faIcon = faLocationDot;
			break;

		default:
			faIcon = null;
			break;
	}
	return <FontAwesomeIcon className={`icon ${iconClass}`} icon={faIcon as any} />;
};

export default Icon;
