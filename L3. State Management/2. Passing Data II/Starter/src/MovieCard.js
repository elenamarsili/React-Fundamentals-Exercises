const MovieCard = ({profiles, users, movie}) => {
  return (
            <li key={movie.id}>
              <h2>{movie.name}</h2>
              {profiles.filter(profile => profile.favoriteMovieID == movie.id).length === 0 
                ? `None of the current users liked this movie` 
                : (<div>
                  <p>Liked By:</p>
                  <ul>
                  {profiles.filter(profile => profile.favoriteMovieID == movie.id).map(profile => {
                    const userName = users[profile.userID].name;
                    return (
                      <li>{userName}</li>
                    )
                  })}
                  </ul>
                </div>)
              }
            </li>
          )
};

export default MovieCard;