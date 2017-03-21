package com.codeclan.example.movierankingscodealong;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;
/**
 * Created by user on 24/02/2017.
 */

public class TestMovie {

    Movie movie;

    @Before
    public void before(){
        movie = new Movie("Rogue One", "Sci-fi", 1);
    }

    @Test
    public void testGetTitle(){
        assertEquals("Rogue One", movie.getTitle());
    }

    @Test
    public void testSetRank(){
        movie.setCurrentRank(2);
        assertEquals(2, movie.getCurrentRank());
    }

    @Test
    public void testMovieToString(){
        assertEquals("Title:Rogue One Genre:Sci-fi Rank:1", movie.toString());
    }


}
