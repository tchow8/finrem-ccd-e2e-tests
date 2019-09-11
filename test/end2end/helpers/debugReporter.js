/* eslint-disable no-undef */

function debugReport(done){


  // eslint-disable-next-line no-console
  console.log('************************* Debug Reporte' + debugReportDir);
    
  var fs = require('fs');

  // destination.txt will be created or overwritten by default.
  fs.copyFile('./test/reportTemplate/DebugReportTemplate.html', debugReportDir +'/DebugReportTemplate.html', (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('source.txt was copied to destination.txt');

    fs.readFile('./test/reportTemplate/DebugReportTemplate.html', 'utf8', function (err, data) {
      if (err) {
        throw err;
      }
      var result = data.replace(/replacejsoncontent/g, JSON.stringify(debugReportJson));

      fs.writeFile(debugReportDir + '/DebugReportTemplate.html', result, 'utf8', function (err) {
        if (err) throw err;
      });
    });

  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(debugReportJson));

  done();

}

module.exports = debugReport;