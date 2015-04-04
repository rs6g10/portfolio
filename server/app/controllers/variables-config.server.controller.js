'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
    converter = require('csvtojson').core.Converter,
    _ = require('lodash');

/**
 * Csv path
 */
var configCsvPath = './server/app/data/variable-analysis/config.csv';

/**
 * Get CSV configuration file
 */
exports.getConfig = function(req, res) {
    var fileStream= fs.createReadStream(configCsvPath);
    var csvConverter=new converter({});

    csvConverter.on("end_parsed",function(jsonObj){
        console.log('finished getting jsonObject'); //here is the result json object
        if(jsonObj){
            res.jsonp(jsonObj);
        }else{
            return res.send(400, {
                message: 'Cannot read CSV file, sorry dude!'
            });
        }
    });
    //read from file
    fileStream.pipe(csvConverter);
};