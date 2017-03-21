package com.codeclan.example.bestmoviesofalltime;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
/**
 * Created by user on 23/02/2017.
 */

public class MovieTest {
    Movie movie1;


    @Before
    public void before() {
        movie1 = new Movie("Terminator", "Action", 2);

    }

    @Test
    public void testGetTitle() {
        assertEquals("Terminator", movie1.getTitle());
    }

    @Test
    public void testGetGenre() {
        assertEquals("Action", movie1.getGenre());
    }

    @Test
    public void testGetRanking() {
        assertEquals(2, movie1.getCurrentRanking());
    }

    @Test
    public void testSetTitle(){
        assertEquals("Genesis", movie1.setTitle("Genesis"));
    }


}
