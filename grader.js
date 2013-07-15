var fs = require('fs')
var program = require('commander')
var cheerio = require('cheerio')
var HTMLFILE_DEFAULT = "index.html"
var CHECKFILE_DEFAULT = "check.json"

var assedFileExists = function(infile){
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

var loadChecks = function(checksFile){
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

