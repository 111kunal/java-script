class Hero{
    name;
    #age=23;
    level;

    // attack(level){
    //     this.level = level;
    //     console.log(`${this.name} attack with level ${this.level}`);
    // }
    // defend(){
    //     console.log("defend");
    // }

    //getter and setter functions
    // set age(age){
    //     this .#age = age;
    // }
    // get age(){
    //     return this.#age;
    // }

    constructor(name,age){
        this.name = name;
        this.#age = age;
        
    }
}

const obj = new Hero("kunal", 45);
console.log(obj.name);
console.log(obj.age);