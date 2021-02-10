// 自动mock
// jest.mock('./util')会做如下mock，自动把类和类中的方法变成jest.fn()
// const Util = jest.fn();
// Util.prototype.a = jest.fn();
// Util.prototype.b = jest.fn();
jest.mock('./util');
import consumer from './consumer';
import Util from './util';

test('automick mock util', () => {
	consumer();
	expect(Util).toHaveBeenCalled();
	expect(Util.mock.instances[0].a).toHaveBeenCalled();
	expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
