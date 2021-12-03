const fs = require('fs')

if(process.argv.length !== 3)
{
    process.exit(1)
}

if(!fs.statSync(process.argv[2]).isDirectory() || !fs.existsSync(process.argv[2]))
{
    process.exit(1)
}

fs.readdir(process.argv[2], (err, files) => {
    files.forEach(e =>
    {
        fs.watch(`${process.argv[2]}\\${e}`, { recursive: true, persistent: true}, () =>
        {
                console.log(fs.readFileSync(`${process.argv[2]}\\${e}`, "utf8"))
        })
    })
});