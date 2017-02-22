public class CashMachine{
  private int reserves;
  private String location ;
  private int maxWithdrawal;

  public CashMachine(int reserves, String location, int maxWithdrawal){
    this.reserves = 1000;
    this.location = location;
    this.maxWithdrawal = 250;
  }

  public int getReserves(){
    return this.reserves;

  }

  public String getLocation(){
    return this.location;
  }

  public int getMaxWithdrawal(){
    return this.maxWithdrawal;
  }

  public void takeMoneyOut(int money){
    this.reserves -= money;
  }

  public int fillUp(){
    this.reserves = 1000;
    return this.reserves;
  }

  public int cantWithdrawMoreThanLimit(int money){
    if (money > maxWithdrawal);
      return 0;
  }
  

 }

