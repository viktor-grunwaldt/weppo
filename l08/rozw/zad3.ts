import http from 'http';
const port = 3000;
const server = http.createServer((req, res) => {
    const dynamicData = 'hello world from server 3000!';
    res.setHeader('Content-Disposition', 'attachment; filename=data.txt');
    res.setHeader('Content-Type', 'text');
    res.write(dynamicData);
    res.end();
});

server.listen(port, () => {
    console.log('See where it all happens at http://localhost:' + port);
});