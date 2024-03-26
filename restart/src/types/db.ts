import { JSONFileSync } from 'lowdb/node';
import { LowSync } from 'lowdb';


export function roundtripDb(filename: string, defaultData: object = {}, key: string, value: string): string {
    const db = new LowSync<any>(new JSONFileSync(filename), defaultData);
    db.data[key] = value;
    db.write();
    db.read();
    return db.data[key];
}
