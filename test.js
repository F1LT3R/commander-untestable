import test from 'ava';
import script from './script';

test('pizza with no sauce', t => {
	const result = script.run([null, null, '--no-sauce']);
	t.is(result, 'you ordered a pizza\nwithout sauce');
});