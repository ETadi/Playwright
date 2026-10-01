const person = "Vijaya";

for (const x of person) {
  console.log(x)
}

//==============================================
const strings = ["abc","xyz","ijk"];

for (const x of strings) {
  console.log(x)
}
//==============================================
const obj = {fname:"vijaya", lname:"bharathi", age:25};

let text = "";
for (const x in obj) {
  text += obj[x];
}

console.log(text)

//==============================================