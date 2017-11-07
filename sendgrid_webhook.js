var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'mokefy' }, function (err, tunnel) {
  console.log('LT running');
});