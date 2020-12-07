const http = require("http");
let users = [
    {
        name: 'Dima'
    },
    {
        name: 'Ruslan'
    },
];

const server = http.createServer( (req, res) => {

    if(req.method === 'GET') {
        res.end(JSON.stringify(users));
    }
    if(req.method === 'POST') {
        req.on('data', (data) => {
            users.push(JSON.parse(data));
        })
    }
    if(req.method === 'PUT') {
        req.on('data', (data) => {
            users = JSON.parse(data);
        })
    }
});

server.listen(3000, () => {
    console.log('server was created');
});

