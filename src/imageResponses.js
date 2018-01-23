const fs = require('fs');
// We gotta use a file system right?
const index = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(index);
  response.end(); // I paid money so I could do this assignment
};


module.exports.getDankMemes = getDankMemes;
