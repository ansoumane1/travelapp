import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};
Title.defaultProps = {
  text: 'Title',
};
export default Title;
