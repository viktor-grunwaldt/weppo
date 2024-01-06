import express from 'express';
import session from 'express-session';
const app = express();
const port = 2023;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: '1234', resave: true, saveUninitialized: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(port);
console.log('See where it all happens at http://localhost:' + port);


app.get('/', (req, res) => {
  res.render('form');
})

  // additional checks for tasks...
  const { firstName, lastName, subjectName, tasks } = req.body;

  const parsed_tasks: number[] = tasks.split(/[\s,]+/).map(n => parseInt(n));

  if (!firstName || !lastName || !subjectName) {
    res.render('form', { error: 'Uzupełnij wszystkie pola.' });
    return;
  }
  req.session.data = { firstName, lastName, subjectName, parsed_tasks };
  // handle successful registration...
  res.redirect('/print')
});



app.get('/print', (req, res) => {

  if (!req.session.data) {
    res.redirect('/');
    return;
  }
  const data = req.session.data;
  res.render('print', { data });
});
