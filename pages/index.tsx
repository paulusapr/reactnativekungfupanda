import React from 'react';
import {connect} from 'react-redux';
import {MovieDetail, MovieList, UserLayout} from '../components';
import {StoreType} from '../interfaces/states';
import {MovieType} from '../interfaces/movie';

const HomePage = (props: StoreType) => {
  const {movie, selected} = props;

  return (
    <UserLayout position="left" navigationView={<MovieList />}>
      <MovieDetail
        {...(movie.find((data: MovieType) => data.id === selected) || movie[0])}
      />
    </UserLayout>
  );
};

function mapStateToProps(state: StoreType) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
