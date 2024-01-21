// import * as pgp_init from 'pg-promise';
import pgp_init from 'pg-promise';

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'zad2_test',
  user: 'postgres',
  password: '1234'
}
async function main(){
  const pgp = pgp_init();
  const db = pgp(connection);
  // creating table
  try {
    await db.none("CREATE TABLE IF NOT EXISTS users (\
      id SERIAL PRIMARY KEY,\
      imie VARCHAR(50),\
      nazwisko VARCHAR(50),\
      plec CHAR(1),\
      data_urodzenia DATE\
      );"
    )
  } catch (error){
    console.log("failed to create table", error);
    pgp.end();
    return;
  }

  try {
    const res = await db.any("INSERT INTO users \
      (imie, nazwisko, plec, data_urodzenia ) VALUES\
      ('Post', 'Gres', 'D', '1986-07-08'),\
      ('Graph', 'Ql', 'D', '2015-09-14')\
      RETURNING id;"
    );
    console.log(res);
    const values= await db.any('SELECT * FROM users;');
    console.log(values);

    if (false) {
      await db.none("UPDATE users SET nazwisko='QL' WHERE imie='Graph'");
      await db.none("DELETE FROM users WHERE data_urodzenia > '2000-01-01'");
    }
  } catch (error){
    console.log(error);
  } finally {
    pgp.end();
  }
}
main();

