import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    alignItems: "center",
    padding: 5,
  },
  name: {
    flex: 1,
    marginRight: 5,
    color: "white",
    fontSize: 25,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    width: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
