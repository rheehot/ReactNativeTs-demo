// components/Hello.tsx
import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Hello: React.FC<Props> = (props) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    props.enthusiasmLevel
  );

  const onIncrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) + 1);
  const onDecrement = () => {
    let tmpEnthu = enthusiasmLevel || 0;
    setEnthusiasmLevel(tmpEnthu < 1 ? 0 : tmpEnthu - 1);
  };

  const getExclamationMarks = (numChars: number): string => {
    numChars = numChars < 0 ? 0 : numChars;
    return Array(numChars + 1).join("!");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {props.name + getExclamationMarks(enthusiasmLevel || 0)}
      </Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );
};

Hello.defaultProps = {
  enthusiasmLevel: 0,
};

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold",
  },
});

export default Hello;
