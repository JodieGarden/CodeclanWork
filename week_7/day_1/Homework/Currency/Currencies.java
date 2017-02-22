import java.util.Currency;
import java.util.*;
public class Currencies {

 public static void main(String args[]) {


   Locale locale = Locale.ITALY;
   Currency currency = Currency.getInstance(locale);

   String symbol = currency.getSymbol(locale);
   System.out.println("Currency symbol is = " + symbol);

   Currency.getInstance("EUR");

   String curCode = currency.getCurrencyCode();
   System.out.println("Currency Code is = " + curCode);
 }
}
