let firstName = 'Jack', lastName = 'Harper', birthYear = 1991, isLoggedIn = true;

function profilebuilder(userBirthYear, userName){
    const age = 2026 - userBirthYear;
    const profileSummary = `Welcome, ${userName}! You are ${age} years old.`;
    
    return profileSummary;
}

let fullName = `${firstName} ${lastName}`;
let userMessage = profilebuilder(birthYear, fullName);
console.log(userMessage);

console.log(isLoggedIn ? "Status: Logged In" : "Status: Logged Out");
