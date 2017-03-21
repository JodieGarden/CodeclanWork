class Mammal extends Animal{
 protected int numLegs;

 public Mammal(int numLegs){
  this.numLegs = numLegs;
 }

 public int getNumLegs(){
  return this.numLegs;
 }
}