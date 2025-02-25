const allDogs = [
{
    dogName:"Dallas",
    breed:"Shorthair/MixTerrier and Pit Bull/Mix",
    age:3

},

{
    dogName:"Luna Lovegood",
    breed:"Terrier, American Pit Bull/Mix",
    age:4
},
{
    dogName:"Marley",
    breed:"Retriever, Labrador/Mix",
    age:9
},
{
    dogName:"Piper",
    breed:"Terrier, Pit Bull/Mix",
    age:3
},
{
    dogName:"Ashton",
    breed:"Terrier, American Pit Bull/Mix",
    age:3
},

{
    dogName:"Axel",
    breed:"Terrier, American Pit Bull/Mix",
    age:21/2
},
{
    dogName:"Bama",
    breed:"Siberian Husky/Mix",
    age:6
},
{
    dogName:"Bane",
    breed:"Rottweiler/Mix",
    age:9
},
{
    dogName:"Bea",
    breed:"Terrier, American Pit Bull/Mix",
    age:2
},
{
    dogName:"Beanie",
    breed:"Terrier, American Pit Bull/Hound",
    age:3
},
];


let minAge = [];
minAge= parseInt(minAge);


const selectedDogs = [];

allDogs.forEach(dog => 
    {
    if (dog.age > minAge) {
        selectedDogs.push(dog);
        
    }
    
});

const showDogs = () => 
    {
    
    let petNumber = document.querySelector("#petNum").value;
   
    petNumber = parseInt(petNumber) - 1;
    
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    
    let pet = allDogs[petNumber];
    


    

let str = `${pet.dogName} the ${pet.breed} is ${pet.age} years old `;
let dogs = document.querySelector(".str");

dogs.innerHTML =str;

str += pet.dogName + " the " + pet.breed + "is "+ pet.age + " years old";
{
console.log(str);

}
}


