package com.codeclan.example.movierankingscodealong;


/**
 * Created by user on 24/02/2017.
 */

public class Ranking {
   private Movie[] movies;

    public Ranking(){
        movies = new Movie[10];
    }

    public void addMovie(Movie movie){
        int index = movie.getCurrentRank() - 1;
        movies[index] = movie;
    }

    public int getSize() {
        int count = 0;
        for (Movie movie : movies){
          if (movie != null) {
              count++;
          }
        }
        return count;
    }

    public Movie getMovieByRank(int rank){
        return movies[rank - 1];

    }

    public void replaceLastMovie(Movie movie){
        movie.setCurrentRank(10);
        addMovie(movie);

    }

    public Movie findMovieByName(String name) {
        for (Movie movie : movies){
            if (name.equals(movie.getTitle())) {
                return movie;
            }
        }
        return null;
    }

    public void move(int oldRank, int newRank){
        Movie movie1 = getMovieByRank(newRank);
        Movie movie2 = getMovieByRank(oldRank);
        movie1.setCurrentRank(oldRank);
        movie2.setCurrentRank(newRank);

        addMovie(movie1);
        addMovie(movie2);
    }

}
