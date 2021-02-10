import { timerGame } from './runAllTimers';

jest.useFakeTimers();

test('should runAllTimers', () => {
	const callback = jest.fn();
	timerGame(callback);

	// At this point in time, the callback should not have been called yet
	expect(callback).not.toBeCalled();

	// timerGame中有两个timeout，	jest.runAllTimers() 会执行所有的timeout
	jest.runAllTimers();

	// Now our callback should have been called!
	expect(callback).toBeCalled();
	expect(callback).toHaveBeenCalledTimes(2);
});
