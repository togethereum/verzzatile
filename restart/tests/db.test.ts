import {roundtripDb} from "../src/types/db";

test('roundtripDb', () => {
    expect(roundtripDb('test.json', {}, 'key', 'value')).toBe('value');
});
