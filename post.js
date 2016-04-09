import fs from 'fs-extra';
import path from 'path';
import config from './config';

const target = process.argv[2];
const tmp = path.join(__dirname, 'tmp');
const dist = path.join( tmp, target + '-post.json' );
fs.removeSync( tmp );
fs.mkdirSync( tmp );

const results = [];
const json = config[target];


for( let uri in json) {
  const items = json[uri];
  items.map((item) => {
    results.push({
      headers: 'Content-Type: application/json\n',
      url: 'http://chaus.herokuapp.com' + uri,
      method: 'POST',
      data: [],
      name: 'POST ' + uri,
      dataMode: 'raw',
      data: JSON.stringify(item)
    });
  });
}

fs.writeFileSync( dist, JSON.stringify({
  requests: results
}), 'utf-8');
