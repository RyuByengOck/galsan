const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');

/* GET home page. */
// 회원가입 API
router.post('/new', function(req,res,next){
    res.locals.connection.query('insert into user (email,name,password,phone,birthday) values ('+req.body.email+','+req.body.name+','+req.body.password+','+req.body.phone+','+req.body.birthday+',)', function(error,result,fields){
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

// 회원 LIST API
router.get('/api/users', function(req,res,next){
    res.locals.connection.query(
        'select (name,email,phone,birthday,reg_dt) from user', function(error,result,fields){
            console.log(results);
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

// TODO byengock 
// 회원 정보 변경
// router.get('/users', function(req,res,next){
//     let user = {};
//     res.locals.connection.query(
//         if(res.body.)
//         '', function(error,result,fields){
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });


// 테스트용
router.get('/api/getUserName', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});


// 테스트용 => localhost:4000//getData
router.get('/getData', (req, res) => {
    db.query("select * from author", (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            // res.send(err);
            res.send(err);
        }
    });
});


module.exports = router;