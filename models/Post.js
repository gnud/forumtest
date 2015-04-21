/**
 * Created by gnu_d on 4/19/15.
 */

var db = require('../lib/database.js').database;

module.exports.Add = function(data, callback) {
    var collection = db.get('postcollection');

    // Submit to the DB
    collection.insert({
        "postTitle" : data.postTitle,
        "postContent" : data.postContent,
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            return callback(err, null);
        }

        callback(null, doc);
    });
};

module.exports.View = function(data, callback) {
    var collection = db.get('postcollection');


    // Submit to the DB
    collection.find({
        "id" : data.id,
    }, {}, function (err, doc) {
        if (err) {
            // If it failed, return error
            return callback(err, null);
        }

        callback(null, doc);
    });
};

module.exports.ListThisUser= function(data, callback) {
    data['user_id'] = "thisUser"; // TODO: the the session user.
    List(data, callback);
};

module.exports.ListForUser= function(data, callback) {
    List(data, callback);
};

module.exports.ListAll= function(data, callback) {
    List({}, callback);
};

var List = function(data, callback) {
    var collection = db.get('postcollection');


    // Submit to the DB
    collection.find({
        "id" : data.id,
    }, {}, function (err, doc) {
        if (err) {
            // If it failed, return error
            return callback(err, null);
        }

        callback(null, doc);
    });
};