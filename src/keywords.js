const keywords = {
  'console-object': { r: /(console)/, s: 'console' },
  'script-php-start': { r : /(\<\?php)/, s:'<?php'},
  'script-php-end': { r: /(\?\>)/, s:'?>'},
  'view-command': { r: /(echo "\w*";)/, s:'echo'},
  'function': {r: /function/, s:'function'},
  'if': {r: /if/, s:'condition if'},
  'foreach': {r: /foreach/, s:'boucle foreach'},
  'as': {r: /as/, s:'as'}
};

module.exports = keywords;