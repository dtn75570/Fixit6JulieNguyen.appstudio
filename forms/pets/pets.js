//Create array named petNames
let petNames= ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

//used an array method here
let withMarmaduke= petNames.concat(['Marmaduke'])
let withMarmaduke= petNames.concat(['Marmaduke'])

let choice= prompt("Please enter 1 to remove Vinny, 2 to remove Marty, 3 to add Nancy, 4 to add their name to the end of the array after they enter their name, etc.")
switch(true){
// remove "Vinny" from the array
case(choice == '1'):
    let posVinny = petNames.indexOf ('Vinny')
    petNames.splice(posVinny,1)
    console.log(`The action taken was: Remove Vinny \n The remaining data are:\n[${petNames}]`)
    break;
// remove "Marty" from the array
case(choice == '2'):
    let posMarty = petNames.indexOf ('Marty')
    petNames.splice(posMarty,1)
    console.log(`The action taken was: Remove Marty \n The remaining data are:\n[${petNames}]`)
    break;
// add "Nancy" to the front of the array
case(choice == '3'):
    petNames.unshift('Nancy')
    console.log(`The action taken was: Add Nancy to the front of the array \n The remaining data are:\n[${petNames}]`)
    break;
// add their name to the end of the array after they enter their name