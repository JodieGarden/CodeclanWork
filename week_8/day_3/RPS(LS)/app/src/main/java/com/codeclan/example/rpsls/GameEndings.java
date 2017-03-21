package com.codeclan.example.rpsls;
import com.codeclan.example.rpsls.*;
/**
 * Created by user on 01/03/2017.
 */

public enum GameEndings {
    WIN(0), LOSE(2), DRAW(3);

    private final int i;

    GameEndings(int i) {
        this.i = i;
    }
    public int i(int i){
        return this.i;
    }
}
