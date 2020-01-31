// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerTwo{
    constructor(attributes){
    this.newlength = attributes.length;
    this.newwidth = attributes.width;
    this.newheight = attributes.height;
    }
    volume(){
        return `${this.newlength}` * `${this.newwidth}` * `${this.newheight}`;
    }
    surfaceArea(){
        return 2 * (`${this.newlength}` * `${this.newwidth}` + `${this.newlength}` * `${this.newheight}` + `${this.newwidth}` * `${this.newheight}`);
    }
}

const cuboidTwo = new CuboidMakerTwo({
    length: 4,
    width: 5,
    height: 5,
})



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerTwo {
    constructor(attributes){
        super(attributes)
    }
    volume(){
        return `${this.newlength}` * `${this.newwidth}` * `${this.newheight}`;
    }
    surfaceArea(){
        return 6 * (`${this.newwidth}` * `${this.newheight}`);
    }
}
const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
})

console.log(cube.volume());
console.log(cube.surfaceArea());