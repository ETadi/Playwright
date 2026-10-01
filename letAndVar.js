//hoisting
//Re-initialisation (let is block scoped)

function one(){
    var a = 1000;
console.log(`var a value in function01 is ${a}`)

}

function two(){
console.log(`var a value in function02 is ${a}`)
}

one()
two()