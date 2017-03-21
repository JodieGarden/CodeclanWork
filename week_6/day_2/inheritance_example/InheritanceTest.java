import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class InheritanceTest {
  Human human;
  Chimp chimp; 
  Cat cat;
  @Before 
  public void before(){
    human = new Human(2);
    chimp = new Chimp(2);
    cat = new Cat(4);

  }

  @Test 
  public void testHumanCanEat(){
    assertEquals("Mmm I'm a human", human.eat());
  }

  @Test 
  public void testChimpCanEat(){
    assertEquals("Mmm", chimp.eat());
  }

  @Test
  public void testHumanLegs(){
    assertEquals(2, human.getNumLegs());
  }

  @Test 
  public void testCatLegs(){
    assertEquals(4, cat.getNumLegs());
  }
}

