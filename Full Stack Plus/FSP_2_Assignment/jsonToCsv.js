const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const jsonFilePath = path.join(__dirname, 'data.json');

try {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

  const data = JSON.parse(jsonData);

  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(data);

  const csvFilePath = path.join(__dirname, 'convertedData.csv');
  fs.writeFileSync(csvFilePath, csv);

  console.log('Conversion successful');
} catch (error) {
  console.error('Error reading or converting csv: ', error);
}
