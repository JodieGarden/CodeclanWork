import static org.junit.Assert.*;
import org.junit.*;
import jewellery.*;

public class RingTest {

  Ring ring;
  
  @Before r
  public void before(){
    ring = new Ring(MetalType.GOLD, GemType.AMETHYST);
  }

  @Test
  public void canGetMetal(){
    assertEquals(MetalType.GOLD,ring.getMetal());
  }

  @Test
  public void canGetGem(){
    assertEquals(GemType.AMETHYST, ring.getGem());
  }
  
//   @Test
//   public void testGemToString(){
//     assertEquals("AMETHYST", ring.canGetGem().ToString());
// }

// @Test
// public void canMisspellMetal(){
//   ring = new Ring("Haribo");
//   assertEquals("Haribo", ring.getMetal());
// }

// @Test
// public void canBeBanana(){
//   ring = new Ring("Banana");
//   assertEquals("Banana", ring.getMetal());
// }
}