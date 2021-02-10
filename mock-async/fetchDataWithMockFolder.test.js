// 模拟 fetchDataWithMockFolder这个module
jest.mock('./fetchDataWithMockFolder');
// 从模拟的 fetchDataWithMockFolder 中引入 getUsers
import { getUsers } from './fetchDataWithMockFolder';

// 不要从模拟的 fetchDataWithMockFolder 中引入someUnAsyncFunc。
// 从真实的fetchDataWithMockFolder中引入 非异步的方法
const { someUnAsyncFunc } = jest.requireActual('./fetchDataWithMockFolder');

test('should fetchDataWithMockFolder', async () => {
	const result = await getUsers();
	expect(result).toBe('abc');
});

test('should someUnAsyncFunc', () => {
	expect(someUnAsyncFunc()).toBe(123);
});
