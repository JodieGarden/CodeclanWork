public class Sprinter implements OlympianRunner, Olympian {
  private int totalDistance;
  private int hydration;

  public void sprint(int distance){
    totalDistance += distance;
  }

  public void drinkWater() {
    hydration++;
  }

  public void jumpHurdle() {
    hydration--;
  }


}