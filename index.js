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
    age:33/4
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

let dogCalls = allDogs.find((element) => element.onclick("button"));

const selectedDogs = (element)=> element.onclick("button"); 
dogCalls = allDogs.find(selectedDogs);

allDogs.forEach((element)=> 
{
    if(element.onclick("button"))
        console.log(element);
})







//let str = 

//let pet = document.querySelector(".str");
    
  //     pet.innerHTML =str;