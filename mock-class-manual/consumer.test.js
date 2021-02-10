// 手动mock
// jest.mock('./util') 会引入 __mocks__/util.js, 里面也做一些自定义的实现。
import consumer from './consumer';
import Util from './util';
jest.mock('./util');

test('manual mock util', () => {
	consumer();
	expect(Util).toHaveBeenCalled();
	expect(Util.mock.instances[0].a).toHaveBeenCalled();
	expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
