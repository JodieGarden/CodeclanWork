package com.codeclan.example.rpsls;

import java.util.Scanner;

/**
 * Created by user on 01/03/2017.
 */

public class Player {
    private Scanner inputScanner;

    public Player(){
        inputScanner = new Scanner(System.in);
    }

    public GameChoices getMove(){
        System.out.print("Rock, paper, or scissors? ");

        String userInput = inputScanner.nextLine();
        userInput = userInput.toUpperCase();
        char firstLetter = userInput.charAt(0);
        if (firstLetter == 'R' || firstLetter == 'P' || firstLetter == 'S') {
            switch (firstLetter) {
                case 'R':
                    return GameChoices.ROCK;
                case 'P':
                    return GameChoices.PAPER;
                case 'S':
                    return GameChoices.SCISSORS;
            }
        }
        return getMove();
    }
}
