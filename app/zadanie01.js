const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const algorythms = ['sha256', 'sha512', 'md5', 'rmd160'];

const crypto = require('crypto');

passwords.forEach(pass => {
  algorythms.forEach(alg => {
    const result = crypto.createHmac(alg, pass);
    if (result.digest('hex') === MY_PWD_HASH) {
      console.log('Algorytm: ' + alg, '; Hasło: ' + pass);
    }
  })
})
