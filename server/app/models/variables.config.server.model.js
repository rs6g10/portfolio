'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Variable Schema
 */
var VariableConfigSchema = new Schema({
    varConfig: [{
        Category: String,
        Description: String,
        Included: Number,
        Name: String,
        SegmentBy: Number,
        TableAlias: String,
        Type: String,
        Variable: String
    }]
});

mongoose.model('VariableConfigSchema', VariableConfigSchema);
