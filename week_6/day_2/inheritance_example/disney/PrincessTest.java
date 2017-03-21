import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class PrincessTest{
  Aurora aurora;
  Belle belle;

  @Before
  public void before(){
    aurora = new Aurora();
    belle = new Belle();
  }

  @Test 
  public void testAuroraCanSpeak(){
    assertEquals("I'm a disney princess!My name is Aurora", aurora.speak());
  }

}