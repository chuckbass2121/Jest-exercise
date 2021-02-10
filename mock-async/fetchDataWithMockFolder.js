import axios from 'axios';

export function getUsers() {
	return axios.get('api');
}

// 一个模块即有异步又有同步方法，如果使用 __mocks__的方式测试，
// 在测试同步方法时，要使用jest.requireActual 引入同步发方法
export function someUnAsyncFunc() {
	return 123;
}
