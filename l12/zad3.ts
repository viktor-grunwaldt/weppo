// import * as pgp_init from 'pg-promise';
import pgp_init, { IDatabase } from 'pg-promise';
import { IClient } from 'pg-promise/typescript/pg-subset';

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'zad3_test',
  user: 'postgres',
  password: '1234'
};

async function insertUserData(db:IDatabase<{}, IClient>) {
  try {
    // Inserting a workplace into 'miejsca_pracy' table
    const insertWorkplaceQuery = `
      INSERT INTO miejsca_pracy (nazwa, adres) 
      VALUES ($1, $2) 
      RETURNING id`;

    const workplaceValues = ['Firma XYZ', 'Trójkąt, Wrocław'];
    const { id: miejscePracyId } = await db.one(insertWorkplaceQuery, workplaceValues);

    // Inserting a user into 'users' table with a reference to the workplace
    const insertUserQuery = `
      INSERT INTO users (imie, nazwisko, plec, data_urodzenia, id_miejsce_pracy) 
      VALUES ($1, $2, $3, $4, $5)`;

    const userValues = ['Jan', 'Kowalski', 'M', '1990-05-15', miejscePracyId];
    await db.none(insertUserQuery, userValues);

    console.log('User and workplace inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

async function main(){
  const pgp = pgp_init();
  const db = pgp(connection);
  // creating table
  try {
    await db.none("CREATE TABLE IF NOT EXISTS miejsca_pracy (\
      id SERIAL PRIMARY KEY,\
      nazwa VARCHAR(50),\
      ADRES VARCHAR(100))"
    );
    await db.none("CREATE TABLE IF NOT EXISTS users (\
      id SERIAL PRIMARY KEY,\
      imie VARCHAR(50),\
      nazwisko VARCHAR(50),\
      plec CHAR(1),\
      data_urodzenia DATE,\
      id_miejsce_pracy INT,\
      FOREIGN KEY (id_miejsce_pracy) REFERENCES miejsca_pracy(id));"
    );
    const res = await db.any(
      "select * from users JOIN miejsca_pracy ON miejsca_pracy.id = users.id_miejsce_pracy"
    );
  } catch (error){
    console.log("failed to create table", error);
    pgp.end();
    return;
  }
  await insertUserData(db);
}
main();

