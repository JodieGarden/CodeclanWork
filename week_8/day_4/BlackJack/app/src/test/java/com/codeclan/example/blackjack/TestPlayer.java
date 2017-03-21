package com.codeclan.example.blackjack;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestPlayer {

    Player player;
    Dealer dealer;
    Deck deck;

    @Before
    public void before(){
        deck = new Deck();
        player = new Player("Ignacious");
        dealer = new Dealer(deck);
    }

    @Test
    public void testGetCard(){
        Card card = dealer.deal();
        player.takeCard(card);
        assertNotNull(player.getCard());
    }
}

