const http = require('http')
const url = require('url')
const port = 3000

const server = http.createServer(function(req, res)
{
    let requestURL = new url.URL(req.protocol + "://" + req.headers.host + req.url);
    let searchParams = new URLSearchParams(requestURL.searchParams);
    let pathname = requestURL.pathname;
    res.writeHead(200, {'Content-Type': 'text/html'});
    let var1 = parseInt(searchParams.get("var1"));
    let var2 = parseInt(searchParams.get("var2"));
    if(Number.isNaN(var1) || Number.isNaN(var2))
    {
        res.writeHead(400, {"Content-Type": "text/html"});
        res.end();
        return;
    }
    switch(pathname)
    {
        case "/add":
        {
            res.write(`${var1}+${var2}=${var1 + var2}`);
            break;
        }
        case "/sub": {
            res.write(`${var1}-${var2}=${var1 - var2}`);
            break;
        }
        case "/mul":
        {
            res.write(`${var1}*${var2}=${var1 * var2}`);
            break;
        }
        case "/div":
        {
            if(var2 === 0)
            {
                res.write(`you cannot divide by 0`)
            }
            else
            {
                res.write(`${var1}/${var2}=${var1 / var2}`);
            }
            break;
        }
        default:
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            break;
        }
    }
    res.end();
})

server.listen(port, function(error)
{
    if(error)
    {
        console.log('error caught: ', error)
    }
    else
    {
        console.log('Server is listening  on port: '+ port )
    }
})