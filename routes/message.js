const express = require('express');

const router = express.Router();
const fs = require('fs');

router.get('/',(req,res) => {
  /*   fs.readFile('message.txt', (err,file) => {
        const data = file.toString();
        res.statusCode = 200;
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
           res.write(`<body><div>${data}<form  action = "/message"  method = "POST"><input id = "send" type = "text" name="title"><button onclick ="document.getElementById('send').value += '-' window.localStorage.getItem('username')" type ="submit">Send</button></form></div></body>`)
           res.write('</html>')
            res.end();  
         })
     return */
   
    fs.readFile('message.txt',(err,data) => {
      
        console.log(data);
        res.send(`<div>${data != null ? data:"No Message Sent"}<br>
        <form  action = "/message"  method = "POST">
        <input id = "send" type = "text" name="title">
        <button onclick ="document.getElementById('send').value += '-' + window.localStorage.getItem('username');<br>" type ="submit">Send</button>
        </form></div>`);
    })
})

router.post('/message',(req,res) => {
    console.log(JSON.stringify(req.body));
    fs.appendFile('message.txt',JSON.stringify(req.body.title),(err)=> {
        if(err) throw err;
     res.redirect('/');
    })
        
    
})


module.exports = router;