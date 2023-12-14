import React from 'react';
import {StyleSheet, ScrollView, Image, useWindowDimensions} from 'react-native';
import {MovieItemDetail} from './MovieItemDetail';
import {MovieType} from '../../interfaces/movie';

export const MovieDetail = (props: MovieType) => {
  const {height} = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={{
          width: '100%',
          height: height - (height * 30) / 100,
          borderRadius: 20,
        }}
        resizeMode="contain"
        source={{uri: props.poster}}
      />
      <MovieItemDetail {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 20,
  },
});
