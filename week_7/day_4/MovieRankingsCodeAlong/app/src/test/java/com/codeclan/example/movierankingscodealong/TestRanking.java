package com.codeclan.example.movierankingscodealong;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
/**
 * Created by user on 24/02/2017.
 */

public class TestRanking {
    private Ranking rank;
    private Movie movie1;
    private Movie movie2;
    private Movie movie3;

    @Before
    public void before(){
        rank = new Ranking();
        movie1 = new Movie("Heat", "Thriller", 1);
        rank.addMovie(movie1);
        movie2 = new Movie("Titanic", "Mince", 10);
        movie3 = new Movie("Batman and Robin", "Garbage", 9);
    }

    @Test
    public void testAddMovie(){

        assertEquals(1, rank.getSize());

    }

    @Test
    public void testGetMovieAtRank(){

        Movie movie = rank.getMovieByRank(1);
        assertEquals("Heat", movie.getTitle());
    }

    @Test
    public void testReplaceLastMovie(){
        rank.addMovie(movie2);
        rank.replaceLastMovie(movie3);
        Movie movie = rank.getMovieByRank(10);
        assertEquals("Batman and Robin", movie.getTitle());
    }

    @Test
    public void testFindMovieBtName(){
        Movie movie = rank.findMovieByName("Heat");
        assertEquals("Heat", movie.getTitle());

    }
    @Test
    public void testMoveMovieUp(){
        rank.addMovie(movie2);
        rank.addMovie(movie3);
    
        rank.move(10,9);
        Movie movie = rank.getMovieByRank(9);
        assertEquals("Titanic", movie.getTitle());
    }

}
