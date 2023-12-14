import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MovieItem} from './MovieItem';
import {MovieType} from '../../interfaces/movie';

export const MovieItemDetail = (props: MovieType) => {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailTitle}>
        {props.title} ({props.year})
      </Text>
      <View style={styles.descriptionDetail}>
        <MovieItem title="Director" text={props.director} />
        <MovieItem title="Casts" text={props.casts} />
        <MovieItem title="Genre" text={props.genre} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    color: '#1a1a1a',
    gap: 20,
  },
  detailTitle: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionDetail: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
