import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

const Tag = ({ title, selectedTag, setSelectedTag }) => (
  <TouchableOpacity onPress={() => setSelectedTag(title)}>
    <Text
      style={[
        styles.tag,
        { borderColor: selectedTag === title ? "#006653" : "#C4C4C4" },
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
export default Tag;
