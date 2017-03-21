package com.codeclan.example.blackjack;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by user on 02/03/2017.
 */
public class Deck {

    private ArrayList<Card> cards;
    Card card;

    public Deck() {
        cards = new ArrayList<Card>();
        populateCards();
    }

    public void populateCards(){
        for (Suit suit : Suit.values()){
            for (Rank rank : Rank.values()){
                cards.add(new Card(suit, rank));
            }
        }
    }

    public int getNumberOfCards(){
        return cards.size();
    }

    public Card removeCard() {
        Card card = cards.remove(0);
        return card;
    }

    public void shuffle(){
        Collections.shuffle(cards);
    }
}
