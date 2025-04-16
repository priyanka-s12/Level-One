//creating files programatically
require('dotenv').config();

const fs = require('fs');
const path = process.env.FILE_PATH;
const logError = require('../errorLogger.js');

//if sample.txt file exists or not, if not, create one

function checkAndCreateFile(filePath) {
  if (!filePath) {
    console.log('File path is not defined');
    return;
  }

  //F_OK flag - file exists at specified location
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(filePath, 'Sample Text', (writeErr) => {
        // if (writeErr) throw writeErr;
        //if issue in writing to file

        if (writeErr) {
          logError(`Error creating file ${writeErr}`);
        } else {
          console.log('File Created');
        }
      });
    } else {
      console.log('File already exists');
    }
  });
}

checkAndCreateFile(path);
