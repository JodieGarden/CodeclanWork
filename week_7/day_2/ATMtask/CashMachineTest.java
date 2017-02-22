import static org.junit.Assert.*;
import org.junit.*;

public class CashMachineTest{

  CashMachine cashMachine1;

  @Before 
  public void before(){



    cashMachine1 = new CashMachine(1000, "Buchanan Street", 250);
  }

  @Test
  public void testGetReserves(){
    assertEquals(1000, cashMachine1.getReserves());
  }

  @Test
  public void testTakeMoneyOut(){
    cashMachine1.takeMoneyOut(200);
    assertEquals(800, cashMachine1.getReserves());
    cashMachine1.fillUp();
    assertEquals(1000, cashMachine1.getReserves());
  }

  @Test
  public void testFillUp(){
    assertEquals(1000, cashMachine1.fillUp());
  }

  @Test 
  public void testCantWithdrawMoreThanLimit(){
    cashMachine1.takeMoneyOut();
    assertEquals(0, cashMachine1.getReserves());
  }
  }
