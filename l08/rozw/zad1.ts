import express from 'express';
import multer from 'multer';
import fs from 'fs';
import process from 'process';
import { debug } from 'console';
const port = 2023;

const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.render("form")
})

app.post('/upload', upload.single('file'), (req, res) => {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  res.send("File has been uploaded.")
})

const server = app.listen(port, () => {
  console.log('See where it all happens at http://localhost:' + port);
});
const shutdown_sequence = () => {
  debug('About to exit.');
  debug('Cleaning files');
  fs.rmSync('./uploads/', { 'recursive': true });
  server.close(() => {
    debug('Server closed');
  })
};
process.on('SIGTERM', shutdown_sequence);
process.on('SIGINT', shutdown_sequence);

