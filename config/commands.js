var Games = require('../app/controllers/games.js');

module.exports = function(app) {
    var games = new Games();
    app.cmd('empezar', '', games.start);
    app.cmd('detener', 'o', games.stop);
    app.cmd('unirse', '', games.join);
    app.cmd('abandonar', '', games.quit);
    app.cmd('cartas', '', games.cards);
    app.cmd('jugar', '', games.play);
    app.cmd('lista', '', games.list);
    app.cmd('ganador', '', games.winner);
    app.cmd('puntos', '', games.points);
    app.cmd('stado', '', games.status);
    app.cmd('pausa', '', games.pause);
    app.cmd('continuar', '', games.resume);
    app.cmd('elegir', '', games.pick);
};
