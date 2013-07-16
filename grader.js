#!/usr/bin/env node
var fs = require('fs')
var program = require('commander')
var cheerio = require('cheerio')
var HTMLFILE_DEFAULT = "index.html"
var CHECKFILE_DEFAULT = "check.json"

var assertFileExists = function(infile){
    var instr = infile.toString()
    if(!fs.existsSync(instr){
	console.log("%s does not exist, Exiting." ,instr)
	process.exit(1)
    }
    return instr;
}

var cheerioHtmlFile = function(htmlfile){
    return cheerio.load(fs.readFileSync(htmlfile)
}

var loadChecks = function(checksfile){
    return JSON.parse(fs.readFileSync(checkfile)
}

var checkHtmlFile = function(htmlfile, checkfile){
    $ = cheerioHtmlFile(htmlfile)
    var checks = loadChecks(checksfile).sort()
    var out = {}
    for(var ii in checks){
	var present = $(check[ii]).length>0
	out[check[ii]] = present
    }
    return out;
}

var clone = function(fn){
    return fn.bind({})
}

if(require.main == module){
    program
	.option('-c, --checks <check_file>', 'Path to checks.json', clone(assertFileExists), CHECKFILE_DEFAULT)
	.option('-f, --file <html_file>', 'Path to index.html', clone(assertFileExists), HTMLFLE_DEFAULT)
	.parse(process.argv)
    var checkJson = checkHtmlFile(program.file, program.checks)
    var outJson = JSON.stringify(checkJson, null, 4)
    console.log(outJson)
}
else {
    exports.checkHtmlFile = checkHtmlFile
}
    
