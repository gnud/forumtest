/**
 * Created by gnu_d on 4/19/15.
 */

var mongo = require('mongodb');
var monk = require('monk');

var configuration = {
    "host": "localhost",
    //"port": 27017,
    "port": 9999,
    "database": "myforum",
};

var connectionUrl = configuration["host"]+":"+configuration["port"]+"/"+configuration["database"];
console.log(connectionUrl);
var db = monk(connectionUrl);

module.exports.database = db;