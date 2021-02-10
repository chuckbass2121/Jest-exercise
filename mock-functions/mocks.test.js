import { loop } from './mocks';
// jest.fn() 的作用
// 1. 捕获函数的调用，以及如何调用的（通过jest.fn().mock属性查看）
//  {
//       calls: [ [ 'a' ], [ 'b' ] ], // 调用参数
//       instances: [ undefined, undefined ], // this 指向
//       invocationCallOrder: [ 1, 2 ], // 调用顺序
//       results: [ // 调用结果
//         { type: 'return', value: undefined },
//         { type: 'return', value: undefined }
//       ]
//     }

// 2. 改变函数返回结果
//  const myMock = jest.fn();
//  console.log(myMock());
//  // > undefined
//  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
//  console.log(myMock(), myMock(), myMock(), myMock());
//  // > 10, 'x', true, true

// 3. 改变函数实现
// 3.1 传入jest.fn()中的函数是默认实现
// jest.fn(()=>{
//   // new implementation
// })

// 3.2 mockImplementationOnce 或者 mockImplementation
// const myMockFn = jest
//   .fn(() => 'default')
//   .mockImplementationOnce(() => 'first call')
//   .mockImplementationOnce(() => 'second call');

// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// // > 'first call', 'second call', 'default', 'default'

// mock function
test('should run mock-functions', () => {
	const mockCallback = jest.fn();
	loop(mockCallback);
	// console.log(mockCallback.mock);
	// {
	//   calls: [ [ 'a' ], [ 'b' ] ],
	//   instances: [ undefined, undefined ],
	//   invocationCallOrder: [ 1, 2 ],
	//   results: [
	//     { type: 'return', value: undefined },
	//     { type: 'return', value: undefined }
	//   ]
	// }
	expect(mockCallback.mock.calls.length).toBe(2);
});
