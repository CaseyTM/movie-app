$(document).ready(function(){

	var apiBaseUrl = 'http://api.themoviedb.org/3/';

	var imageBaseUrl = 'http://image.tmdb.org/t/p/';

	const nowPlayingUrl = apiBaseUrl + 'movie/now_playing?api_key=' +apiKey;

	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		
		for(let i = 0 ; i < nowPlayingData.results.length; i ++){

			var movieId = nowPlayingData.results[i].id;

			var movieIdUrl = apiBaseUrl + 'movie/' + movieId + '/videos' + '?api_key=' + apiKey;

			var genreId =nowPlayingData.results[i].genre_ids;

			console.log(genreId)

			// SECOND JSON CALL TO GET MOVIE SPECIFIC DATA
			$.getJSON(movieIdUrl, function(individualMovieData){
				var movieKey = individualMovieData.results[0].key;

				var releaseDate = nowPlayingData.results[i].release_date;

				var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;

				var overView = nowPlayingData.results[i].overview;

				var youTubeLink = 'https://www.youtube.com/watch?v='+movieKey;
				
			
				var nowPlayingHTML = '';
				nowPlayingHTML += '<div class="col-sm-3">';
					nowPlayingHTML += '<div class="movie-wrapper">';
						nowPlayingHTML += '<a href="' +youTubeLink+'"><img src="'+poster+'"></a>';
						nowPlayingHTML += 'In theaters ' + releaseDate;
						nowPlayingHTML += '<div class="description">';
							nowPlayingHTML += overView;
						nowPlayingHTML += '</div>';
					nowPlayingHTML += '</div>';
				nowPlayingHTML += '</div>';
			$('#movie-grid').append(nowPlayingHTML);
			});

		}
		
	});

}); 






