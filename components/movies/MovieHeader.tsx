import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {MovieHeaderProps} from '../../interfaces/components';
const burgerMenu = require('../../assets/burger-menu.png');

export const MovieHeader = (props: MovieHeaderProps) => {
  const {title, onClick} = props;
  return (
    <View style={styles.header}>
      {onClick && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 10,
          }}
          onPress={onClick}>
          <Image style={{width: 20, height: 20}} source={burgerMenu} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232a',
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
