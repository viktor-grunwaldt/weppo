# l12

## jak instalowałem na Archu Postgresa:

`paru -S postgres`
`sudo -u postgres initdb --locale en_US.UTF-8 -D /var/lib/postgres/data`
`sudo systemctl start postgresql`
`psql -c "alter user postgres with password '1234'"`
`sudo -u postgres psql`

## zad 1

[https://www.postgresql.org/docs/current/tutorial-transactions.html](https://www.postgresql.org/docs/current/tutorial-transactions.html)

### wariant 1

```SQL
\l
create database test;
\c test
BEGIN;

CREATE SEQUENCE osoba_id_seq START 1;
CREATE TABLE OSOBA (
    id_osoba INT PRIMARY KEY DEFAULT nextval('osoba_id_seq'),
    imie VARCHAR(50),
    nazwisko VARCHAR(50),
    plec CHAR(1),
    data_urodzenia DATE
);

INSERT INTO OSOBA (imie, nazwisko, plec, data_urodzenia)
VALUES ('Jan', 'Kowalski', 'M', '1990-05-15'),
('Anna', 'Nowak', 'K', '1985-10-20');
COMMIT;
 ```

### wariant 2
```SQL
\l
\c test
BEGIN;

CREATE TABLE OSOBA_AUTO (
    id_osoba SERIAL PRIMARY KEY ,
    imie VARCHAR(50),
    nazwisko VARCHAR(50),
    plec CHAR(1),
    data_urodzenia DATE
);

INSERT INTO OSOBA_AUTO (imie, nazwisko, plec, data_urodzenia)
VALUES ('Jan', 'Kowalski', 'M', '1990-05-15');

INSERT INTO OSOBA_AUTO (imie, nazwisko, plec, data_urodzenia)
VALUES ('Anna', 'Nowak', 'K', '1985-10-20');
COMMIT;
 ```

## ts init

```fish
pnpm init
pnpm add -D typescript @types/node pg-promise
 ```
