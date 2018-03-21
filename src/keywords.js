const keywords = {
  //'variable-declaraction': { r: /(\$\w*)/, s: 'var' },
  'console-object': { r: /(console)/, s: 'console' },
  'script-php-start': { r : /(\<\?php)/, s:'<?php'},
  'script-php-end': { r: /(\?\>)/, s:'?>'},
  'view-command': { r: /(echo "\w*";)/, s:'echo'},
  'function': {r: /function/, s:'function'},
  'for': {r: /for/, s:'boucle for'},
  'if': {r: /if/, s:'condition if'},
  'foreach': {r: /foreach/, s:'boucle foreach'},
};

module.exports = keywords;