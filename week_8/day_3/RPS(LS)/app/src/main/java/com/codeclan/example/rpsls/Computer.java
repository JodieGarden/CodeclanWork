package com.codeclan.example.rpsls;

import java.util.Random;

/**
 * Created by user on 01/03/2017.
 */

public class Computer {

    public Computer(){

    }

    public GameChoices getMove(){
        GameChoices[] moves = GameChoices.values();
        Random random = new Random();
        int index = random.nextInt(moves.length);
        return moves[index];
    }
}
