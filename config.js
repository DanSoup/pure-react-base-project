const fs = require('fs');

const config = {
  BS_FOLDER: "apps",
  BS_URL: "pure-react-base-project"
};

let bs = fs.readFileSync('./buildspec.yml', 'UTF8');

Object.entries(config).forEach(([key, value]) => {
  const reg = new RegExp(key + ': ".*?"');
  bs = bs.replace(reg, key + ': "' + value + '"');
});

fs.writeFileSync('./buildspec.yml', bs);

module.exports = config;