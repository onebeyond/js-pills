var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('./advanced/merging-arrays/README.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./advanced/merging-arrays/README.html', markdownReadMe);
