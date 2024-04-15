//const bodyParser = require('body-parser');
//const session = require('express-session');
const port = 3000;
app.use(bodyParser.urlencoded)
app.use(session({

    secret: 'your_secret_key';
    resave: false,
    saveUnitialized: true
}));
let users=[
    {
        id: 1, username: 'BP', password: 'password1'
    },
    {
        id: 2, username: 'LPU',password: 'password2'
    }
];
function authenticate(req,res,next){
    return res.redirect('/')
    if(req.session && req.session)
}
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.post('/login',(req,res)=>{
    const{username,password}= req.body;
    const user= users.find(u=>u.username === username && u.password=== password);
    if(user){
        req.session.user;
        res.redirect('/protected');
    }
    else{
        res.status(401).send('Invalid username or password');
    }
});
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
});
app.get('/protected',authenticate,(req,res)=>{
    res.send('Welcome ${req.session')
})
/*8-9: DSA
9-10:Javascript
10-11: Break
11-12: node Js
*/