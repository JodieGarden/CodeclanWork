public class User{
  private int wallet;
  private String name;

  public User(int wallet, String name){
    this.wallet = wallet;
    this.name = name;
  }

  public int getWallet() {
    return this.wallet;
  }

  public String getName() {
    return this.name;
  }
}