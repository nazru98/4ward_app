

import React, { useState, useRef } from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../../Styles/Colors";
import imagePath from "../../assets/imagePath";
import WrapperContainer from "../../Components/WrapperContainer";

const { width } = Dimensions.get("window");

const data = [
  {
    name: "Hendrerit vulputate sem",
    img: imagePath.ic_13x,
    body: "Aenean et convallis nulla. Donec in effucutur nisi, et vestibulum quam aenean.",
  },
  {
    name: "Hendrerit vulputate sem",
    img: imagePath.ic_13x,
    body: "Aenean et convallis nulla. Donec in effucutur nisi, et vestibulum quam aenean.",
  },
  {
    name: "Hendrerit vulputate sem",
    img: imagePath.ic_13x,
    body: "Aenean et convallis nulla. Donec in effucutur nisi, et vestibulum quam aenean.",
  },
];

const InitialScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item.img} />
      <Text style={{ ...styles.bodyText, fontSize: 22 }}>{item.name}</Text>
      <Text style={styles.bodyText2}>{item.body}</Text>
    </View>
  );

  const handlePagination = (index) => {
    setCurrentIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <WrapperContainer>
      <View style={{ flex: 0.9 }}>
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onMomentumScrollEnd={handleScroll}
          onScrollToIndexFailed={() => {}}
        />
      </View>

      <View style={styles.getStartedContainer}>
      
        <View style={styles.indicatorContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
              currentIndex == index?styles.activeDotStyle:styles.dotStyle,
                { backgroundColor: currentIndex === index ? Colors.redColor : Colors.gray1 },
              ]}
              onPress={() => handlePagination(index)}
            />
          ))}
        </View>
        <Text style={styles.getStartedText} onPress={()=>navigation.navigate("LoginWith")}>GET STARTED</Text>
      </View>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray2,
    borderRadius: 8,
  },
  postContainer: {
    flex: 1,
    backgroundColor: "#4C4C4C",
    shadowColor: "0 10px 20px 0 rgba(37,51,75,0.05), 0 3px 6px 0 rgba(37,51,75,0.05);",
    borderRadius: 8,
    padding: 10,
    marginBottom: 24,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    marginTop: 24,
  },
  bodyText: {
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: 32,
    fontWeight: "500",
    marginTop: 90,
  },
  bodyText2: {
    textAlign: "center",
    color: "#999999",
    lineHeight: 22,
    fontSize: 13,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  dotStyle: {
    width: 16,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  }, activeDotStyle: {
    width: 32,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  getStartedContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 0.1,
    justifyContent: "space-between",
  },
  getStartedText: {
    fontSize: 15,
   color:Colors.whiteColor,
    marginRight: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
  },
 
});
