const Person = require("./person")
const _ = require("lodash")

const person1 = new Person("John Smith", 25)

person1.greeting()

let people = [
    person1,
    new Person("Jane Smith", 23),
    new Person("Jason Smith", 17),
    new Person("Kevin Smith", 20)
]

//console.log(people)

random_person = _.sample(people)
//console.log(random_person)
random_person.greeting()

let person1_index = _.findIndex(people, person1)
let random_person1_index = _.findIndex(people, random_person)

// console.log(person1_index)
// console.log(random_person1_index)

let difference = _.difference(people, [random_person, person1])
console.log(difference)