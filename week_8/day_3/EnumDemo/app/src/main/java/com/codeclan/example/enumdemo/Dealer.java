package com.codeclan.example.enumdemo;

/**
 * Created by user on 01/03/2017.
 */

public class Dealer {

    Deck deck;
    Card card;
    public Dealer(Deck deck){
        this.deck = deck;
    }

    public Card deal(){
        card = deck.removeACard();
        return card;
    }


}
