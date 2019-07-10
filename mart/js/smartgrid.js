const smartgrid = require('smart-grid');
const settings = {
	filename: '_smart-grid',
	outputStyle: 'scss',
	oldSizeStyle: false,
	properties: [],
	container: {
		maxWidth: '1110px',
		fields: '30px'
	},
	columns: 12,
	offset: '20px',
	breakPoints: {
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