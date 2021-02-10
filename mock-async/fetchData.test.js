import axios from 'axios';
import { getUsers } from './fetchData';
jest.mock('axios'); // 模拟 axios modules, 在测试 getUsers 时不会真正发送请求。

// jest.mock() 的作用
// 模拟 modules
// jest.mock('axios');
test('should getUsers', async () => {
	const resp = { data: [{ name: 'Bob' }] };
	axios.get.mockResolvedValue(resp);

	const result = await getUsers();
	expect(result).toEqual(resp);
});
