
module.exports = function(app, db) {

    app.post('/livedata', (req, res) => {
        // You'll create your note here.
        res.send('Posting to livedata...' + req.body);
        console.log(req.body);
      });
      
   app.get('/livedata', (req, res) => {
       
       res.send('GET livedata...' + Date.now());
        console.log('GET livedata');
        
       });

};