import { getConfig } from './getConfig';

test('should getConfig', () => {
	expect(getConfig()).toMatchSnapshot({
		createdAt: expect.any(Date),
	});
});

test('should getConfig inline', () => {
	expect(getConfig()).toMatchInlineSnapshot(
		{
			createdAt: expect.any(Date),
		},
		`
    Object {
      "createdAt": Any<Date>,
      "env": "dev",
      "url": "abc",
    }
  `
	);
});
