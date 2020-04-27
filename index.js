const http = require('http');

let server = http.createServer((req, res) => {

    res.end('OK');

});

server.listen(3000, '127.0.0.1', () => {

    console.log('Servidor Rodando!');

});