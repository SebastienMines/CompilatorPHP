const keywords = {
  'variable-declaraction': { r: /(\$\w*)/, s: 'var' },
  'console-object': { r: /(console)/, s: 'console' },
  'script-php-start': { r : /(\<\?php)/, s:'<?php'},
  'script-php-end': { r: /(\?\>)/, s:'?>'},
  'view-command': { r: /(echo "\w*";)/, s:'echo'}
};

module.exports = keywords;