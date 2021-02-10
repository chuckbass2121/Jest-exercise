export function loop(callback) {
	for (let item of ['a', 'b']) {
		callback(item);
	}
}
