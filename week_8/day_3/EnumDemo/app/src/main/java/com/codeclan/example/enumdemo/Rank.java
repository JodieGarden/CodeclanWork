package com.codeclan.example.enumdemo;

/**
 * Created by user on 01/03/2017.
 */

public enum Rank {
    ACE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    EIGHT(8),
    NINE(9),
    TEN(10),
    JACK(11),
    QUEEN(12),
    KING(13);

    private int i;

    Rank(int i) {
        this.i = i;
    }
}
