package com.codeclan.example.enumdemo;

import java.util.ArrayList;

/**
 * Created by user on 01/03/2017.
 */

public class Player {
    String name;
    ArrayList<Card> hand;

    public Player(String name){
        this.name = name;
        hand = new ArrayList<Card>();
    }

    public void recieveACard(Dealer dealer){
        hand.add(dealer.deal());
    }

    public int getHandValue(){
       return hand.get(0).getCardValue();
    }
}
