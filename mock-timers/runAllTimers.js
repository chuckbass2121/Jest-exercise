export function timerGame(callback) {
	setTimeout(() => {
		callback && callback();
		setTimeout(() => {
			callback && callback();
		}, 3000);
	}, 3000);
}
