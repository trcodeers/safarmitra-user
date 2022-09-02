import { GlobalConstants } from '../constants/GlobalConstants';
import { openDB,  } from 'idb';

const defaultTableName = 'keyval'
const dbPromise = openDB(GlobalConstants.APP_Name, 1, {
  upgrade(db) {
    db.createObjectStore('keyval');
  },
});

export const createStore = (dbName: string, tableName: string) =>{
   return openDB(dbName, 1, {
        upgrade(db){
            db.createObjectStore(tableName);
        }
    })
}

export const initDB = (dbName: string) => {
    return openDB(dbName, 1, {});
}

export async function get(key: any, tableName: string = defaultTableName, db: any = dbPromise) {
  return (await db).get(tableName, key);
};

export async function getAll(key: any, tableName: string = defaultTableName, db: any = dbPromise) {
    return (await db).getAll(tableName, key);
  };

export async function set(key: any, val: any, tableName: string = defaultTableName, db: any = dbPromise, dbName?: string) {
    return (await db).put(tableName, val, key);
};

export async function del(key: any, tableName: string = defaultTableName) {
  return (await dbPromise).delete(tableName, key);
};

export async function clear(tableName: string = defaultTableName,) {
  return (await dbPromise).clear(tableName);
};

export async function keys(tableName: string = defaultTableName, db: any = dbPromise) {
    return (await db).getAllKeys(tableName);
};