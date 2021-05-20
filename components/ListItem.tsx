import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftCotainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

type Props = {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
};

const ListItem = ({ imageUrl, title, author, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftCotainer}>
        {!!imageUrl && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
