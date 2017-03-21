package com.codeclan.example.loops;

import java.util.Scanner;

/**
 * Created by user on 27/02/2017.
 */

public class While {
    int input;


    public void executeLoop() {
        String[] letters = {"A", "b", "c"};
        for(int i = 0; i<letters.length; i++){
            System.out.println(letters[i]);
        }

    }
}





//        int number = 3;
//        while(input != number){
//        getGuess();
//        }
//        System.out.println("Correct");
//    }
//
//    public void getGuess(){
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Guess a number between 1 and 5");
//        input = Integer.parseInt(sc.nextLine());
//
//    }


