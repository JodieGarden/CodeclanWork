import java.util.HashMap;


public class HashMapTask{

  public static void main(String[] args){
    HashMap<String, Country> countries = new HashMap<String, Country>();

    Country uk = new Country ("Uk",64100000);
    Country germany = new Country ("Germany",80620000);
    Country france = new Country ("France",66030000);
    Country japan = new Country ("japan",127300000);

    countries.put("Uk", uk);
    countries.put("Germany", germany);
    countries.put("France", france);
    countries.put("Japan", japan);

    Country country1 = countries.get("Uk");

    System.out.println(countries.values());

    System.out.println(countries.containsKey("Uk"));

    System.out.println(countries.size());

    System.out.println(country1.getName() +" has a population of " + country1.getPopulation());

  }
}