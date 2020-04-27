module.exports = (app) => {

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({

            users: [{

                name: 'Eric',
                email: 'eric.araujolima@hotmail.com',
                id: 1

            }]

        });

    });

};