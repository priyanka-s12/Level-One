const fs = require('fs');

try {
  fs.appendFileSync(
    'log.txt',
    `\n\n [INFO] 2025-04-16 08:00:30 New Log Entry: Data appended at 8:10am`
  );
  console.log('Data appended successfully');
} catch (error) {
  console.error('Error: ', error);
}
