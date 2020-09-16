/*
    How to use express FrameWork

    1. npm init ( npm을 통해 프로젝트 정보 기입 ) => package.json will create
    2. npm install express --save ( 현 프로젝트 폴더 내에 express에 필요한 node_modules 설치 )
    3. index.js file create ( 모든 프로젝트를 실행 및 적용하는데 기본인 index.js 파일을 만들어줌 === 프로젝트 네비게이션 역할 )
    4. index.js 를 node 기본 실행으로 만들기 위한 스크립트 문 적용
        => pakage.json
            scripts : {
                "start" : "node index.js"
            }
    5. index.js 파일 작성
            5-1. const port = 5000; (포트번호 입력)
            5-2. const express = require('express');
                => express 환경 사용 정의
            5-3. const app = express();
                => app을 express의 모든 함수를 적용할 수 있도록 만들어줌
            5-4. const mongoose = require('mongoose');
                => 후일에 mongoDB를 사용하기 위해 mongoose module을 사용하겠다는 의미
                => npm install mongoose --save

            5-5. app.get('/', (req, res) => res.send('Hello world!'));
                => get 방식으로 데이터를 넘겨준다.
                => '/' 빈 경로에 get 방식으로 접근할 때 함수를 실행한다.
                => respose에 String 형태인 'Hello world!' 데이터를 넘겨준다.
            5-6. app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
                => 우리가 작성하는 모든 app은 포트번호 5000을 통해 동작을 시행한다.

*/

const port = 5000;

const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const connect = mongoose.connect(config.mongoURI,
{
    useNewUrlParser :true, useUnifiedTopology : true,
    useCreateIndex : true, useFindAndModify : false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => res.send("Hello Node.JS study!"));

app.use('/api/users', require('./routes/user'));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));