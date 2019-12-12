'use strict'
const shell = require('shelljs');
const fs = require('fs');
var resemblejsCompare = require('resemblejs').compare;

module.exports.generatetest = function(req,success,error){
    console.log(`${req.path_project}/miliage/com.evancharlton.mileage-mutant${req.mutante}`)
    shell.cd(`${req.path_project}/miliage/com.evancharlton.mileage-mutant${req.mutante}`);
    shell.exec(`calabash-android gen`);
    shell.exec(`calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
     shell.exec(`calabash-android run com.evancharlton.mileage_3110-aligned-debugSigned.apk`, function(code, stdout, stderr) {
        console.log('Ok calabash');
      });
 
    
}
module.exports.generatevrt = function(req,success,error){
       var timestamp = (new Date()).getTime();
        var execution = {
            insertionDate: new Date(),
            timestamp: timestamp,
            beforeImgUri: req.imagebefore,
            afterImgUri: req.imageafter
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
                fs.writeFile(`${req.path_project}/comparation.png`, data.getBuffer(), (err) => {                
                    if (err) reject(err);
                    execution.comparation = data;
                    execution.comparationImgUri = `${req.path_project}/comparation.png`;
                    console.log('report '+JSON.stringify(execution))
                    success(execution);
                });
            });
        
    });
}

module.exports.generateRandom = function(req,success,error){
    console.log(`${req.path_project}/miliage/com.evancharlton.mileage-mutant${req.mutante}`)
    shell.cd(`${req.path_project}/miliage/com.evancharlton.mileage-mutant${req.mutante}`);
    shell.exec(`calabash-android gen`);
    shell.exec(`calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
    shell.exec(`adb unistall com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
    shell.exec(`adb install com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
    shell.exec(`adb shell monkey -p com.evancharlton.mileage -s 1576195569852 1000`)
}