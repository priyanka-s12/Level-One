const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

//path to csv file
const csvFilePath = path.join(__dirname, 'data.csv');

//array to store csv data
const results = [];

//read csv file
//pipe - parses csv into rows
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const jsonFilePath = path.join(__dirname, 'data.json');

    try {
      fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
    } catch (error) {
      console.error('Error writing the json file: ', error);
    }
  })
  .on('error', (err) => {
    console.error('Error reading the csv file: ', err);
  });

//when run data.json file will be  created
