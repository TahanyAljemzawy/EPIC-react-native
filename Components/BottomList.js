import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder,
  Image,
} from 'react-native';
import logo from '../assests/loginLogo.png';

const {height: deviceHeight} = Dimensions.get('window');

const BottomList = () => {

  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current; 

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
       onPanResponderMove: (e, gestureState) => {
         if(-gestureState.dy > 0 &&  -gestureState.dy <= deviceHeight-110 )
        {
        pan.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
        Animated.event([null, {x: pan.x, y: pan.y}], {
          useNativeDriver: true,
        });
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const {dy, dx} = gestureState;

        if (Math.abs(dy) >= deviceHeight / 2 -60) {
          Animated.spring(pan, {
            toValue: {y: -deviceHeight + 110, x: 0},
            velocity: 3,
            tension: 5,
            friction: 8,
            useNativeDriver: true,
          }).start();
        } else if ( Math.abs(dy) < deviceHeight / 2 -60) {
         hideBottomList()
        }
        pan.flattenOffset();
      },
    }),
  ).current;

  const hideBottomList = ()=> {
    Animated.spring(pan, {
      toValue: {y: 0, x: 0},
      velocity: 3,
      tension: 5,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={{
        ...styles.listContainer,
        transform: [{translateY: pan.y}],
      }}
      {...panResponder.panHandlers}>
      <View style={styles.ListGrayLine}></View>
      <Image source={logo} />
      <Text style={styles.text}>Hello Aspirers..</Text>
    </Animated.View>
  );
};

export default BottomList;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: deviceHeight - 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: -deviceHeight + 110,
  },
  ListGrayLine: {
    width: 100,
    backgroundColor: '#ccc',
    height: 10,
    position: 'absolute',
    top: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'pink',
  },
});
