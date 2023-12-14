import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {StoreType} from '../../interfaces/states';
import {MovieType} from '../../interfaces/movie';
import {useUserLayoutContext} from '../UserLayout';

const MovieList = (props: StoreType) => {
  const {closeDrawer} = useUserLayoutContext();
  const {movie, selected} = props;
  const dispatch = useDispatch();

  const onMovieChange = (ids: string) => {
    dispatch({
      type: 'CHANGE_MOVIE',
      payload: {
        selected: ids,
      },
    });
    closeDrawer();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.listItem}>
        {movie.map((data: MovieType) => {
          return (
            <TouchableOpacity
              onPress={() => onMovieChange(data.id)}
              key={data.id}
              style={{
                ...styles.listItemText,
                ...(data.id === selected ? styles.listItemTextActive : {}),
              }}>
              <Text
                style={{
                  ...styles.listItemTitle,
                  ...(data.id === selected ? styles.listItemTitleActive : {}),
                }}>
                {data.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
  },
  listItem: {
    width: '100%',
    paddingVertical: 10,
  },
  listItemText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  listItemTextActive: {
    backgroundColor: '#acb2c1',
    fontWeight: 'bold',
  },
  listItemTitle: {
    color: '#000000',
    fontSize: 18,
  },
  listItemTitleActive: {
    fontWeight: 'bold',
  },
});

function mapStateToProps(state: StoreType) {
  return state;
}

export default connect(mapStateToProps)(MovieList);
