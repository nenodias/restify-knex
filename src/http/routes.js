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

    server.get('/', async (req, res, next) => {
        res.send('Enjoy the silence!');
        db('sincad').where('ncad_cgcocpf_2','>', 120).first().then((result) => {
            console.log(result);
            next();
        });
    });

};

module.exports = routes;