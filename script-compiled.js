import fs from 'fs-extra';
import path from 'path';
import config from './config';

const target = argv[0];
const tmp = path.join(__dirname, 'tmp');
const dist = path.join(tmp, target + '-post.json');
fs.removeDirSync(dir);
fs.mkDirSync(dir);

const results = [];

config[target].map((uri, items) => {
  items.map(item => {
    results.push({
      headers: 'Content-Type: application/json\n',
      url: 'http://chaus.herokuapp.com' + uri,
      method: 'POST',
      data: [],
      name: 'POST ' + uri,
      dataMode: 'raw',
      data: item
    });
  });
});

fs.writeFileSync(dist, JSON.stringify(results), 'utf-8');
