import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Human human;
  @Before 
  public void before(){
    bear = new Bear("Yogi");
    salmon = new Salmon();
    human = new Human();
  }

@Test
public void testBearName(){
  assertEquals("Yogi", bear.getName());
}

@Test 
public void testBellyEmpty(){
  assertEquals(0, bear.foodCount());
}

@Test
public void testBearCanEat(){
  bear.eat(salmon);
  assertEquals(1, bear.foodCount());
}

@Test
public void testBellyIsEmptyAfterSleeping(){
bear.eat(salmon);

bear.sleep();

assertEquals(0, bear.foodCount());

}
@Test 
public void testBearCanEatHuman(){
  bear.eat(human);
  assertEquals(1, bear.foodCount());
}

@Test
public void testHumanCanSwim(){
  assertEquals("I can swim!", human.swim());
}

@Test
public void testSalmonCanSwim(){
  assertEquals("Flappy floppy glug glug", salmon.swim());
}

@Test
public void testBearCanBeSick(){
  bear.eat(salmon);

  Edible food = bear.throwUp();

  Salmon salmon = (Salmon) food;

  assertEquals("Flappy floppy glug glug", salmon.swim());
}
}
