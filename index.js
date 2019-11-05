const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class Logger {
    read(path) {
        fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
          console.log(row);
        })
        .on('end', () => {
          console.log('CSV file successfully processed');
        });
    }
    write(data, template) {
        const csvWriter = createCsvWriter({
            path: 'out.csv',
            header: template
        });
        csvWriter
            .writeRecords(data)
            .then(()=> console.log('The CSV file was written successfully'));
    }
    readPartly(file, long, pos = 0, offset = 0) {
        const buff = Buffer.alloc(long);
        
        fs.open(file, 'r', (err, fd) => {
            fs.read(fd, buff, offset, long, pos,
            (err, bytes, buff) => { 
                console.log(buff.toString());
                //important
                fs.close(fd, () => {
                    console.log('Thank you.');
                });
            });
        });
        
        console.log(`Great ${long} bytes long part`);
    }
    append(path, item) {
        fs.appendFile(path, item, function (err) {
            if (err) throw err;
            console.log('Successfully appended.');
        });
    }
}

module.exports = Logger;