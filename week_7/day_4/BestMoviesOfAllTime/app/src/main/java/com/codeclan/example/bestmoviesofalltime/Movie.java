package com.codeclan.example.bestmoviesofalltime;

import java.util.Arrays;

/**
 * Created by user on 23/02/2017.
 */

public class Movie {
    private String title;
    private String genre;
    private int currentRanking;


    public Movie(String title, String genre, Integer currentRanking){
        this.title = title;
        this.genre = genre;
        this.currentRanking = currentRanking;
    }

    public String getTitle() {
        return title;
    }


    public String getGenre() {
        return genre;
    }

    public int getCurrentRanking() {
        return currentRanking;
    }

    private void setTitle(String title) {
        this.title = title;
    }

    private void setGenre(String genre) {
        this.genre = genre;
    }

    public void setCurrentRanking(Integer currentRanking) {
        this.currentRanking = currentRanking;
    }

}


