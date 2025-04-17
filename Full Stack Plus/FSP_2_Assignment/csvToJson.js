const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePath = path.join(__dirname, 'data.csv');

const results = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const jsonFilePath = path.join(__dirname, 'data.json');

    try {
      fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
      console.log('Conversion successful');
    } catch (error) {
      console.error('Error writing the json file: ', error);
    }
  })
  .on('error', (err) => {
    console.error('Error reading the csv file: ', err);
  });
