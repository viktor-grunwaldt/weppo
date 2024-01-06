import express from 'express';
import session from 'express-session';
import sfs from 'session-file-store';
// mumbo jumbo
const FileStore = sfs(session);
const port = 2023;

const app = express();

app.use(session({
    store: new FileStore(),
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000, secure: false, httpOnly: true }
}));
app.get('/', (req, res) => {
    // Odczytywanie
    const username = req.session.username || 'Anonymous';

    res.send(`Hello, ${username}!`);
});

app.get('/add', (req, res) => {
    // Dodawanie wartości
    req.session.username = 'MaxVayne';

    res.redirect("/");
});

app.get('/del', (req, res) => {
    // Usuwanie
    delete req.session.username;

    res.redirect("/");
});

// handle with care
// app.get('/destroy', (req, res) => {
//     // Usuwanie całej sesji
//     req.session.destroy();

//     try{
//         res.redirect("/");

//     } catch {
//         res.send(`<p>whoops!<\\p>`)
//     }
// });

const server = app.listen(port, () => {
    console.log('See where it all happens at http://localhost:' + port);
});