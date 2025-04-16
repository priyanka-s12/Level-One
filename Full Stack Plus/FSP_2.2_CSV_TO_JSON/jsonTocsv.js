const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

//path to json file
const jsonFilePath = path.join(__dirname, 'data.json');

//read json file
try {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  //   console.log(jsonData);
  const data = JSON.parse(jsonData);
  //   console.log('After parsing: ', data);

  //create new csv parser
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(data);

  //write the csv data to file
  const csvFilePath = path.join(__dirname, 'convertedData.csv');
  fs.writeFileSync(csvFilePath, csv);

  console.log('Conversion successful');
} catch (error) {
  console.error('Error reading or converting csv: ', error);
}
