class Human extends Mammal{
  public Human(int numLegs){
    super(numLegs);
  }
  public String eat(){
    return super.eat() +" I'm a human";
  }
}