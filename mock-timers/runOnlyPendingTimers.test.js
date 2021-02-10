import { timerGame } from './runOnlyPendingTimers';

jest.useFakeTimers();

test('should runOnlyPendingTimers', () => {
	const callback = jest.fn();
	timerGame(callback);

	// At this point in time, the callback should not have been called yet
	expect(callback).not.toBeCalled();

	// timerGame中有两个timeout，	jest.runOnlyPendingTimers() 只会执行当前的timeout，不会执行新创建的timeout
	jest.runOnlyPendingTimers();

	// Now our callback should have been called!
	expect(callback).toBeCalled();
	expect(callback).toHaveBeenCalledTimes(1);
});
