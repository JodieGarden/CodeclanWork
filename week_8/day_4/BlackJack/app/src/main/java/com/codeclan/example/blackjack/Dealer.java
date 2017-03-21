package com.codeclan.example.blackjack;

/**
 * Created by user on 02/03/2017.
 */

public class Dealer {

    private static Deck deck;


    Dealer(Deck deck){
        this.deck = deck;
        this.deck.shuffle();
    }

    public static Card deal(){
        Card card = deck.removeCard();
        return card;
    }
}
