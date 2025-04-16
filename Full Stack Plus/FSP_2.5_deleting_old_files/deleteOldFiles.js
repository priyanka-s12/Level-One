//delete old files that created before 30days
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const directoryPath = path.resolve(process.env.DIRECTORY_PATH);

const thresholdDays = parseInt(process.env.THRESHOLD_DAYS);

//date comparision - converting into milliseconds
const thresholdDate = new Date(
  Date.now() - thresholdDays * 24 * 60 * 60 * 1000
);

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Error deleting directory: ', err);
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    //stat = modification, creating time
    fs.stat(filePath, (err, stat) => {
      if (err) {
        return console.error('Error getting file stats: ', err);
      }
      if (stat.mtime < thresholdDate) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error in deleting file: ', err);
          } else {
            console.log('Deleted old files successfully ', filePath);
          }
        });
      }
    });
  });
});
