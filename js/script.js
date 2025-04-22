//Here are used two types of function
//+============================================================================+

let teamMembers = ["Al-Amin Sir", "Rafi", "Rakib", "Sakib"];

function members(teamMember = teamMembers){
    for(let i = 0; i < teamMember.length; i++){
        console.log(`Welcome To Join Our Team (${teamMember[i]})`);
    }
}
members();

//+============================================================================+

//+============================================================================+

let areaName = ["Azimpur", "Lalbagh", "New Market", "Dhanmondi"];
areaName.map(area => {
    console.log(`This is ${area} area`);
})

//+============================================================================+

//+============================================================================+

let phoneNames = ["Apple", "Samsung", "Mi", "Oppo", "Google"];

function phone(names){
    console.log(`I am ${names} user.`);
}

for(let i = 0; i<phoneNames.length; i++){
    phone(phoneNames[i]);
}

//+============================================================================+

//+============================================================================+

let developer = {
    name : "Developer1",
    age : 24,
    skills : ["Python", "JS", "C", "Java"]
}

developer.skills.map(skill => {
    console.log(`He skilled in ${skill}`);
})

//+============================================================================+