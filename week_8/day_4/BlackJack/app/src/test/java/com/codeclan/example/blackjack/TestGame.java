package com.codeclan.example.blackjack;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 02/03/2017.
 */

public class TestGame {

    ArrayList<Player> players;
    Deck deck;
    Dealer dealer;
    Player player1;
    Player player2;
    Game game;

    @Before
    public void before(){
        players = new ArrayList<Player>();
        player1 = new Player("Ally");
        player2 = new Player("Alan");
        players.add(player1);
        players.add(player2);
        game = new Game(players, dealer);
  }

    @Test
    public void testComparePlayerHands(){
        player1.takeCard(new Card(Suit.CLUBS, Rank.KING));
        player2.takeCard(new Card(Suit.CLUBS, Rank.QUEEN));
        assertEquals("Ally wins", game.compareCards());
    }



}
