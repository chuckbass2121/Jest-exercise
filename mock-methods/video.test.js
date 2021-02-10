import video from './video';
// jest.spyOn(object, methodName) 是模拟一个对象上的方法。
// 但是被模拟的方法默认是会被调用的！！
// 想不调用可以覆盖默认实现 jest.spyOn(object, methodName).mockImplementation(() => {});
test('plays video but call spied method', () => {
	const spy = jest.spyOn(video, 'play');
	const isPlaying = video.play();

	expect(spy).toHaveBeenCalled();
	expect(isPlaying).toBe(true);

	spy.mockRestore();
});

test('plays video but without calling spied method', () => {
	// 不调用被mock的方法，而是调用自己的实现，这时返回的是 123
	const spy = jest.spyOn(video, 'play').mockImplementation(() => {
		return 123;
	});
	const isPlaying = video.play();

	expect(spy).toHaveBeenCalled();
	expect(isPlaying).toBe(123);

	spy.mockRestore();
});
