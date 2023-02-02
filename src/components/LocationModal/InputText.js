import React from "react";
import { TextInput } from "react-native";
import styles from "./Styles";

const InputText = ({ value, setValue, placeholder, autoFocus }) => (
  <TextInput
    value={value}
    onChangeText={(e) => setValue(e)}
    autoFocus={autoFocus}
    placeholder={placeholder}
    style={styles.inputText}
  />
);
export default InputText;
