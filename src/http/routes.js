const db = require('../../db')

const routes = (server) => {

    server.post('/autenticacao', async (req, res, next) => {
        try {
            const { email, password } = req.body;
            //TODO later
            res.send(null);
        } catch (error) {
            res.send(422, error);
        }
        next();
    })

    server.get('/', (req, res, next) => {
        res.send('Enjoy the silence!');
        next();
    });

};

module.exports = routes;