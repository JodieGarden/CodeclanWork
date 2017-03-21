package com.codeclan.example.enumdemo;

/**
 * Created by user on 01/03/2017.
 */

public class Runner {

    public static void main(String[] args) {
        Deck deck = new  Deck();
        Dealer dealer = new Dealer(deck);
        Card card = dealer.deal();
        Card card2 = dealer.deal();
        System.out.println(card.rank + " of " + card.suit);
        System.out.println(card2.rank + " of " + card.suit);
        System.out.println(card.rank.ordinal() > card2.rank.ordinal());

    }
}
