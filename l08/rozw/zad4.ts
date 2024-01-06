import express from 'express';
const port = 2023;

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const href = (lnk: string, txt: string) =>
    `<a href="./${lnk}">${txt}</a><br>`;

app.get('/', (req, res) => {
    res.send(href('add', 'Add Cookie')
        + href('del', 'Remove Cookie')
        + href('view', 'View Cookie')
        + href('chk', 'Check browser for compatibility')
    )
})
app.get('/add', (req, res) => {
    if (!req.headers.cookie) {
        console.log('Adding cookie to response');
        res.setHeader('Set-Cookie', 'my-cookie=HelloThere');
    }
    res.send(`<p>cookie added</p><br>` + href('', 'go back'));
});

app.get('/del', (req, res) => {
    res.setHeader('Set-Cookie', 'my-cookie=; Max-Age=0');
    res.send(`<p>cookie deleted</p><br>` + href('', 'go back'));

});
app.get('/view', (req, res) => {
    res.send(JSON.stringify(req.headers.cookie)
        + '<br>' + href('', 'go back'))
})
app.get('/chk', (req, res) => {
    res.send(`<script>window.alert(navigator.cookieEnabled ? "obsługuje": "nie obsługuje") </script>`
        + '<br>' + href('', 'go back'))
})

// app.post('/submit', (req, res) => {
//     log(req.body);
//     res.send(req.body);
// })
const server = app.listen(port, () => {
    console.log('See where it all happens at http://localhost:' + port);
});