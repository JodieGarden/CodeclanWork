package com.codeclan.example.enumdemo;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by user on 01/03/2017.
 */

public class Deck {

    private ArrayList<Card> cards;

    public Deck(){
        cards = new ArrayList<Card>();
        populateDeck();
        Collections.shuffle(cards);
    }

    private void populateDeck() {
        for (Suit suit : Suit.values()) {
            for (Rank rank : Rank.values()) {
                Card card = new Card(rank, suit);
                cards.add(card);
            }
        }
    }
    public int getLength(){
        return cards.size();
    }

    public Card removeACard(){
        return cards.remove(0);
    }
}
