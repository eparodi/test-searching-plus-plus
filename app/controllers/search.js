const commons = require('../commons');
const { get } = commons.repository('properties');


module.exports = function searchController(req, res, next) {
  const response = {
    results: []
  };

  const q = req.query['q'];

  const onDone = () => res.json(response);
  const onError = (err) => next(err);
  var datasource = get();
  datasource = datasource.filter( result => {
      for (var key in result){
          if (result[key].toString().includes(q)){
              return true;
          }
      }
  })
  datasource.take(100).toArray().subscribe((results) => {
    response.results = results
  }, onError, onDone);
};
