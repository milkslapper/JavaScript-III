/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is Window Binding and that means its showing everything/objects in the entire window of your screen
* 2. Implicit Binding when using a method inside of an object that method will gain the binding of the 'this' keyword based on the method called.
* 3. New Binding if a function was called with new, the this keyword is referencing that new object that the interpretor created.
* 4. Explicit Binding allows us to explicitly say to a function what object it should use , using functions such as call ,apply and bind.
*
* write out a code example of each explanation above
*/

// Principle 1
function logger(param) {
    console.log(this)
}
logger();
// code example for Window Binding

// Principle 2
const dude = {
    name: 'oscar',
    age: 22,
    food: 'tamales',
    fun (){
        return `${this.name} loves to eat ${this.food}`
    }
}
console.log(dude.fun())
// code example for Implicit Binding

// Principle 3
function Chiwuawua(food) {
  this.food = food
  this.color = 'brown'
  this.bark = 'LOUD!!'
  this.eat = function () {
    console.log(`This animal likes to eat ${this.food}`)
  }
}

const dog = new Chiwuawua('dog-food')
console.log(dog)
// code example for New Binding

// Principle 4
const oscar = {
    name: 'oscar'
  }
  const skills = ['eatting', 'sleeping','breathing']
  function introduce (skills1,skills2,skills3) {
    console.log( `Hello! my name is : ${this.name} and these are my skills: ${skills1},${skills2}, and ${skills3}`)
  }
  introduce.call(oscar,skills[0],skills[1],skills[2])
// code example for Explicit Binding