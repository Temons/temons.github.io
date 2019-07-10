const smartgrid = require('smart-grid');
const settings = {
	filename: '_smart-grid',
	outputStyle: 'scss',
	oldSizeStyle: false,
	properties: [],
	container: {
		maxWidth: '1260px',
		fields: '50px'
	},
	columns: 12,
	offset: '20px',
	breakPoints: {
		lg: {
			width: '1200px',
			fields: '20px'
		},
		md: {
			width: '992px',
			fields: '20px'
		},
		sm: {
			width: '720px',
			fields: '10px'
		},
		xs: {
			width: '576px',
			fields: '10px'
		}
	}
};
smartgrid('../sass', settings);