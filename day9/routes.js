//  Importing FS module.
const fs = require('fs');


const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    // validating the url.
    if(url === '/'){
        // Home Page
        res.write('<html>');
        res.write('<head><title>My First App</title></head>');
        res.write('<body><h1 style="color:red">Fill the details</h1> <form action="/message" method="POST"><input type="text" name="value"><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    
    }
    // Rendering User to the page after the submission of the data
    if(url==='/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(`value of message is : ${message}`)
            // Local Variable
            let value ='';
            // Looping Statement for the table.
            for(let i=1;i<=10;i++){
                value += `${message} * ${i} = ${message * i}\n`;
            }
            // Pushing the data into the file.
            fs.writeFile(`table-${message}.txt`, value,err =>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First App</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
