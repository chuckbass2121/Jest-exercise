import { timerGame } from './runAllTimers';

beforeEach(() => {
	jest.useFakeTimers();
});

test('should advanceTimersByTime', () => {
	const callback = jest.fn();
	timerGame(callback);
	// advanceTimersByTime快进定时器
	jest.advanceTimersByTime(3000); // 快进3s执行第一个定时器
	expect(callback).toHaveBeenCalledTimes(1);

	jest.advanceTimersByTime(3000); // 快进3s执行第二个定时器
	expect(callback).toHaveBeenCalledTimes(2);
});
