// const Movies = require("../controllers/MovieLists.controllers");
const Lists = require("../controllers/MovieLists.controllers");
const Users = require("../controllers/Users.controller");
module.exports = app => {
    app.post('/api/register', Users.register);
    app.post('/api/login', Users.login);
    app.post('/api/movie', Lists.add);
    app.get('/api/list', Lists.getAll);
}