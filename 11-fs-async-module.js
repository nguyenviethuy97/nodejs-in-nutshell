const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
    writeFile('./content/result-sync.txt',
     `hello this is result: ${first}, ${result}`, 
     (err, result) => {
        if(err){
            console.log(err);
            return
        }
        console.log(result);
     })
    })
})

 