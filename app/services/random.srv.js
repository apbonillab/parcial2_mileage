'use strict'
const shell = require('shelljs');
const fs = require('fs');
var resemblejsCompare = require('resemblejs').compare;

module.exports.generatetest = function(req,success,error){
    console.log(req.path_project)
    shell.cd(`${req.path_project}/miliage`);
    shell.exec(`calabash-android gen`);
    shell.exec(`calabash-android resign com.evancharlton.mileage.apk`)
    shell.exec(`calabash-android run com.evancharlton.mileage.apk`, function(code, stdout, stderr) {
        console.log('Ok calabash');

        var timestamp = (new Date()).getTime();
        var execution = {
            insertionDate: new Date(),
            timestamp: timestamp,
            beforeImgUri: `${path_project}/original1.png`,
            afterImgUri: `${path_project}/mutante1.png`
        };

        const options = {
            returnEarlyThreshold: 5
        };


        return new Promise((resolve, reject) => {
            const options = {};
            console.log(execution.beforeImgUri);
            resemblejsCompare(execution.beforeImgUri, execution.afterImgUri, options, function (err, data) {
                if (err) reject(err);   
                else        {
                    console.log(data);
                }                     
                fs.writeFile(`${path_project}/comparation.png`, data.getBuffer(), (err) => {                
                    if (err) reject(err);
                    execution.comparation = data;
                    execution.comparationImgUri = `${path_project}/comparation.png`;
                    console.log('report '+JSON.stringify(execution))
                    success(execution);
                });
            });
        
    });

      });
 
    
}