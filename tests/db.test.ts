const db = require('../src/db')
import {describe, expect, test} from '@jest/globals';


describe('db', () => {
    test('db.addCell', () => {
        const data = new db.LowDb();
        const cell = data.createCell('value')
        expect(cell.getValue()).toBe('value');
    });
});