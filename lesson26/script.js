class Fruit{
    constructor(name,taste,color,size,price){
        this.name = name
        this.taste = taste
        this.color = color
        this.size = size
        this.price = price
    }
}

class Healthy_Fruits extends Fruit{
    constructor(name, taste, color, size, price, benefit,vitaminlist){
        super(name,taste,color,size,price)
        this.benefit = benefit
        this.vitaminlist = vitaminlist
    }
}

const a = new Fruit('Apple','sweet', 'red', 'medium', 200)
console.log(a.taste)
const b = new Fruit('Banana', 'Mild sweet','yellow','medium', 70)
console.log(b.color)
const h1 = new Healthy_Fruits('kiwi','sour','green','medium', 30,'It helps in dengue fever and chickengunia fever', ['c','d'])
console.log(h1.price)
console.log(h1.vitaminlist)