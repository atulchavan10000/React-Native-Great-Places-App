import { SQLite } from 'expo-sqlite';

//creates a db if not available on local otherwise connect to it
const db = SQLite.openDatabase('places.db');

// initialize database
// executeSql second arg is executed when the query executes successfully otherwise second arg
// wrapping db transaction in promise to make the promise like behavior by simply 
// calling the resolve() and reject() from db transactions second and thir arg
export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};