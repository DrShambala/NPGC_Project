new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('first log');
        resolve()
    }, 1000);
}).then(function(){
    console.log('second log');
    
})