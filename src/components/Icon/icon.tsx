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
import { constants } from '../../utils';

interface IICON {
	type: string;
	iconClass: string;
}

const Icon = ({ type, iconClass }: IICON): JSX.Element => {
	let faIcon;
	switch (type) {
		case constants.ICON_TYPES.FOODTYPE:
			faIcon = faUtensils;
			break;
		case constants.ICON_TYPES.STAR:
			faIcon = faStar;
			break;
		case constants.ICON_TYPES.SORT_AZ:
			faIcon = faSortAlphaDown;
			break;
		case constants.ICON_TYPES.SORT_ZA:
			faIcon = faSortAlphaUp;
			break;
		case constants.ICON_TYPES.CHEVRON_DOWN:
			faIcon = faChevronDown;
			break;
		case constants.ICON_TYPES.CHEVRON_LEFT:
			faIcon = faChevronLeft;
			break;
		case constants.ICON_TYPES.CHEVRON_RIGHT:
			faIcon = faChevronRight;
			break;
		case constants.ICON_TYPES.LOCATION:
			faIcon = faLocationDot;
			break;

		default:
			faIcon = null;
			break;
	}
	return <FontAwesomeIcon className={`${constants.CLASSNAMES.ICON} ${iconClass}`} icon={faIcon as any} />;
};

export default Icon;
