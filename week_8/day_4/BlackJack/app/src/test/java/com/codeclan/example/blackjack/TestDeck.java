package com.codeclan.example.blackjack;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestDeck {

    Deck deck;

    @Before
    public void before(){
        deck = new Deck();
    }

    @Test
    public void testDeckHas52Cards(){
        assertEquals(52, deck.getNumberOfCards());
    }

    @Test
        public void testRemoveCard(){
        Card card = deck.removeCard();
        assertNotNull(card);
        assertEquals(51, deck.getNumberOfCards());
    }
}
