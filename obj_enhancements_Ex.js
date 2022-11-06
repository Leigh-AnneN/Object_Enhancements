

// Same keys and values ES2015
/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

// Computed Property Names
/* Write an ES2015 Version */

let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// Object Methods
/* Write an ES2015 Version */
const instructor = {
  firstName: "Colt",
  sayHi (){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

// createAnimal function

function createAnimal  (species, verb, noise) {
    return {
        species,
        [verb](){// shorthand when key in an object reps a function 
            return noise;
        }
    }
}
   