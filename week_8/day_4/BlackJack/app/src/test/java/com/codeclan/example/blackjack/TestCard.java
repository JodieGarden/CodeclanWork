package com.codeclan.example.blackjack;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 02/03/2017.
 */

public class TestCard {

    Card card;

    @Before
    public void before(){
        card = new Card(Suit.CLUBS, Rank.ACE);
    }

    @Test
    public void testCardValue(){
        assertEquals(1, card.getValue());
    }
}
