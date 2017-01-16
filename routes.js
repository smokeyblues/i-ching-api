var Hexagrams = require('./controllers/hexCtrl');

module.exports = (app) => {
  app.get('/', (res, req)=>{
    res.sendFile('index.html', {root: './public/html'});
  });

  app.get('/api/hexagrams', Hexagrams.get); // return all hexagrams
  app.get('/api/hexagrams/:id', Hexagrams.get); // return one hexagram 
}
