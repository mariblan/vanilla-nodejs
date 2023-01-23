function hello() {
  console.log('hello');
}
hello();

const fs = require('fs');

function writeFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file created');
    }
  });
}
writeFile('test.html', '<h1>hello</h1>');
