"use strict"; 

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){
    $scope.movies = [];     
    
    const getMovies = () => {
        MovieService.getWishlistMovies($rootScope.uid).then((results) => {
            $scope.movies = results;
     
        }).catch((err) => {
            console.log(err); 
        }); 
    }; 

    getMovies(); 

    $scope.deleteMovie = (movieId) => {
        MovieService.deleteMovie(movieId).then((result) => {
            getMovies();  
        }).catch((err) => {
            console.log(err); 
        });
    };

    $scope.switchWatched = (movie) => {
        movie.isWatched = true; 
        console.log("movie", movie); 
        MovieService.updateMovie(movie, movie.id).then((result) => {
            console.log(result); 
        }).catch((err) => {
            console.log(err); 
        });
    };

});  