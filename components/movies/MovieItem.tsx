import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface MovieItemProps {
  title: string;
  text: string;
}

export const MovieItem = (props: MovieItemProps) => {
  const {title, text} = props;

  return (
    <View style={styles.descriptionDetailText}>
      <Text style={styles.textDetail}>{title}:</Text>
      <Text style={styles.textDetailItem}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionDetailText: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    alignItems: 'center',
    color: '#000000',
  },
  textDetail: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDetailItem: {
    fontSize: 20,
    color: '#000000',
  },
});
