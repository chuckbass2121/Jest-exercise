// 如果不想创建__mocks__文件夹也以在jest.fn()的第二参数中传入实现。

jest.mock('./util', () => {
	const Util = jest.fn(() => {
		console.log('factory constructor');
	});

	Util.prototype.a = jest.fn(() => {
		console.log('factory a method');
	});

	Util.prototype.b = jest.fn(() => {
		console.log('factory b method');
	});
	return Util;
});
import consumer from './consumer';
import Util from './util';

test('automick mock util', () => {
	consumer();
	expect(Util).toHaveBeenCalled();
	expect(Util.mock.instances[0].a).toHaveBeenCalled();
	expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
