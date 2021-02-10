const Util = jest.fn(() => {
	console.log('constructor');
});

Util.prototype.a = jest.fn(() => {
	console.log('a method');
});

Util.prototype.b = jest.fn(() => {
	console.log('b method');
});

export default Util;
