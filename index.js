console.log("before prepare food")


function preparefood(callback){
    setTimeout(() => {
        console.log("food is cooking")
        callback("food is ready to be served")
        

    },20)
}
function preparejuice(callback){
    setTimeout(() => {
        console.log("juice in making")
        callback("juice is ready to be served")
        

    },10)
}


function preparecoffee(callback){
    setTimeout(() => {
        console.log("coffe is in making")
        callback("coffee is ready to be served")
        

    },5)
}


function foodCallback(value) {
    console.log("value:",  value)
    preparejuice(function juiceCallback(value) {
        console.log("value:",  value)
        preparecoffee(function coffeecallback(value) {
            console.log("value:",  value)        
        }
        )    
    })
}

preparefood(foodCallback)

console.log("program end")