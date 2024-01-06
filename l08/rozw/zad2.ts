import express from 'express';
const port = 2023;

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    const checkboxes = ["Wake up", "Eat breakfest", "Finish WEPPO homework",
    ].map((elem, idx) => {
        return { value: "chbx" + idx, label: elem }
    });
    res.render("todo", { list: checkboxes });
});

// app.post("/submit", (req, res) => {
//     log(req.body);
//     res.send(req.body);
// })
const server = app.listen(port, () => {
    console.log('See where it all happens at http://localhost:' + port);
});