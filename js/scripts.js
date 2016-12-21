$(document).ready(function(){


	var apiBaseUrl = 'http://api.themoviedb.org/3/';

	var imageBaseUrl = 'http://image.tmdb.org/t/p/'

	const nowPlayingUrl = apiBaseUrl + 'movie/now_playing?api_key=' +apiKey;


	// https://api.themoviedb.org/3/movie/346672?api_key=fec8b5ab27b292a68294261bb21b04a5



	// console.log(movieId)

	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		// console.log(nowPlayingData);
		
		for(let i = 0 ; i < nowPlayingData.results.length; i ++){

			// var releaseDate = nowPlayingData.results[i].release_date;
			// var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			// var overView = nowPlayingData.results[i].overview;
			var movieId = nowPlayingData.results[i].id;
			var movieIdUrl = apiBaseUrl + 'movie/' + movieId + '/videos' + '?api_key=' + apiKey;
			// console.log(movieIdUrl)
			// SECOND JSON CALL TO GET MOVIE SPECIFIC DATA
			$.getJSON(movieIdUrl, function(individualMovieData){
				var movieKey = individualMovieData.results[0].key
				var releaseDate = nowPlayingData.results[i].release_date;
				var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
				var overView = nowPlayingData.results[i].overview;
				var youTubeLink = 'https://www.youtube.com/watch?v='+movieKey;
				console.log(youTubeLink)
				
			
					// console.log(movieKey);
				
					// console.log(movieKey);
				// console.log(individualMovieData)
			
				var nowPlayingHTML = '';
				nowPlayingHTML += '<div class="col-sm-3">';
					nowPlayingHTML += '<div class="movie-wrapper">';
						nowPlayingHTML += '<a href="' +youTubeLink+'"><img src="'+poster+'"></a>';
						// console.log(movieKey)
						nowPlayingHTML += 'In theaters ' + releaseDate;
						nowPlayingHTML += '<div class="description">';
						nowPlayingHTML += overView;
							// nowPlayingHTML += '<div class ="movieId">';
							// nowPlayingHTML += movieId;
							// nowPlayingHTML += '</div>';
						nowPlayingHTML += '</div>';
					nowPlayingHTML += '</div>';
				nowPlayingHTML += '</div>';
				// console.log(poster)
				// console.log(nowPlayingData.results[i].release_date)
				// console.log(releaseDate)s
				// console.log(overView)
			$('#movie-grid').append(nowPlayingHTML);
			});


		}
		// $('#movie-grid').html(nowPlayingHTML);
	});




}); 






