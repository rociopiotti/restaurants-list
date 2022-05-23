const constants = {
	API: {
		RESTAURANT_API: {
			identifier: 'restaurant-list-api-mock',
			url: 'https://run.mocky.io/v3/0bf89452-300e-4acb-a6ed-0b4856b24121',
		},
		PRINCE_RANGE_API: {
			identifier: 'price-range-mock',
			url: 'https://run.mocky.io/v3/72e3d40c-2aee-45b1-9e93-00a269cdfbdb',
		},
		FOOD_TYPE_API: {
			identifier: 'food-type-mock',
			url: 'https://run.mocky.io/v3/44ecbb79-5a5a-472f-8383-2a039db5c852',
		},
	},
	GENERAL: {
		QUERY_KEY_RESTAURANTS: 'restaurants',
		QUERY_KEY_FOOD_TYPE: 'foodTypes',
		QUERY_KEY_PRICE_RANGE: 'priceRanges',
		MAP: {
			TITLE_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			CENTER: {
				LAT: 40.73207085189651,
				LON: -73.95145454201108,
			},
			ZOOM: 12,
		},
	},
	MESSAGES: {
		CARD: {
			ALT: 'placeholder',
		},
		HEADER: {
			TITLE: 'Restaurants list',
		},
	},
	ICON_TYPES: {
		STAR: 'faStar',
		LOCATION: 'faLocationDot',
		FOODTYPE: 'faUtensils',
		CHEVRON_LEFT: 'faChevronLeft',
		CHEVRON_RIGHT: 'faChevronRight',
		SORT_AZ: 'sortAZ',
		SORT_ZA: 'sortZA',
		CHEVRON_DOWN: 'faChevronDown',
	},
	TEST_ID: {
		CAROUSEL: {
			ELEMENT: 'carousel-element',
		},
	},
	CLASSNAMES: {
		CARD: {
			COMPONENT: 'card',
			TITLE_CONTAINER: 'title-container',
			ICON_BUTTON: 'icon-button',
			ICON_CHECKED: 'faStar--state-checked',
			ICON_UNCHECKED: 'faStar--state-unchecked',
			PRICE_RANGE: 'price-range',
			ADDRESS: 'address',
			ICON_CLASS_LOCATION: 'faLocationDot',
			FOOD_TYPE: 'food-type',
			ICON_CLASS_FOODTYPE: 'faUtensils',
		},
		CAROUSEL: {
			CONTAINER: 'carousel-container',
			WRAPPER: 'carousel-wrapper',
			LEFT_ARROW: 'left-arrow',
			CHEVRON_LEFT: 'faChevronLeft',
			CONTENT_WRAPPER: 'carousel-content-wrapper',
			CONTENT: 'carousel-content',
			TRANSALATE_X: 'translateX(-',
			RIGHT_ARROW: 'right-arrow',
			CHEVRON_RIGHT: 'faChevronRight',
		},
		CONTROL: {
			CONTAINER: 'controls',
		},
		CHIP: {
			CONTAINER: 'chip',
		},
		FILTERS: {
			CONTAINER: 'filters',
		},
		HEADER: {
			CONTAINER: 'header',
		},
		ICON: 'icon',
		LIST: {
			CONTAINER: 'list-container',
			WRAPPER: 'list-wrapper',
			LIST: 'list',
			ITEM: 'list-item',
		},
		MAP: {
			CONTAINER: 'map',
			LEAD_MAP: 'leadMap',
		},
		SORT: {
			CONTAINER: 'sort',
			ICON_BTN_LEFT: 'icon-button-left',
			ICON_BTN_RIGHT: 'icon-button-right',
			ICON_SORT_AZ_SELECTED: 'sortAZ--state-selected',
			ICON_SORT_ZA_SELECTED: 'sortZA--state-selected',
			ICON_SORT_AZ: 'sortAZ',
			ICON_SORT_ZA: 'sortZA',
		},
	},
};

export default constants;
