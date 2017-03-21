package com.codeclan.example.movierankingscodealong;

/**
 * Created by user on 24/02/2017.
 */

public class Movie {

    private String title;
    private String genre;
    private int currentRank;

    public Movie( String title, String genre, int currentRank) {

        this.title = title;
        this.genre = genre;
        this.currentRank = currentRank;

    }


    public String getTitle() {
        return title;
    }

    public String getGenre() {
        return genre;
    }

    public int getCurrentRank() {
        return currentRank;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setCurrentRank(int currentRank) {
        this.currentRank = currentRank;
    }

    public String toString(){
        return "Title:" + this.title + " Genre:" + this.genre + " Rank:" + this.currentRank;
    }
}
