var express = require('express');
var router = express.Router();
var Entities = require('html-entities').AllHtmlEntities

var Post = require('../models/Post.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Post parameters:
 * postTitle
 * postContent
 * postTags
 */
router.post('/add', function(req, res, next) {
    entities = new Entities();

    req.database;

    var msg = {
        id: "",
        action: "msgpost",
        status: "success",
        result: {
            postId: 0,
            postUrl: "http://localhost:3000/posts/0"
        },
    }

    var postTitle = req.body["postTitle"];
    var postContent = req.body["postContent"];
    var postTags= req.body["postTags"];

    msg['result']['postTitle'] = postTitle;
    msg['result']['postContent'] = entities.encode(postContent);
    //msg['result']['postContentDec'] = entities.decode(postContent);

    var insertCallback = function(err, result){
      console.log("insertCallback, err:", err, 'result:', result);
    };

    var data = {
        "postTitle": postTitle,
        "postContent": postContent,
    };

    Post.Add(data, insertCallback);
    res.send(msg);
});

router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
    var listCallback = function(err, results){
        console.log("listCallback, err:", err, 'result:', results);

        var msg = {
            id: "",
            action: "msgpost",
            status: "success",
            result: results,
        };
        //res.send(msg);

        res.render('posts', { title: 'Express', 'msg': msg });
    };

    Post.ListAll(null, listCallback);
});

module.exports = router;
