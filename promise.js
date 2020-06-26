function preparefood(){
    let promise = new Promise(function(resolve ,  reject){
        setTimeout(() => {
            console.log("food is cooking")
            resolve("food prepared")
            
    
        },20)
        

    })
    return promise
    
}

function preparecoffee(){
    let promise = new Promise(function(resolve ,  reject){
        setTimeout(() => {
            console.log("coffee in making")
            resolve("coffee prepared")
            
    
        },20)
        

    })
    return promise
    
}

function preparejuice(){
    let promise = new Promise(function(resolve , reject){
        setTimeout(() => {
            console.log("juice in making")
            resolve("juice is ready")
        } , 20)
    }
        
    )
    return promise
}



promise =  preparefood();
promise.then(function foodCallback(value) {
    console.log("value:",  value)
    return preparecoffee()
})
.then(function foodCallback(value) {
    console.log("value:",  value)
    return preparejuice()
})
.then(function juicecallback(value) {
    console.log("value:" , value)
})

