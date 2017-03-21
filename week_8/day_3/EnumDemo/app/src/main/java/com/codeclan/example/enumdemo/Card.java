package com.codeclan.example.enumdemo;

/**
 * Created by user on 01/03/2017.
 */

public class Card {

    Suit suit;
    Rank rank;

    public Card(Rank rank, Suit suit){
        this.suit = suit;
        this.rank = rank;
    }

    public int getCardValue() {
        return rank.ordinal();
    }
}
