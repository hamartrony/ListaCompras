import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
  h1: {
    fontSize: 30,
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  p: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "95%",
  },
  inputs: {
    flex: 1,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 5,
    marginRight: 5,
    fontSize: 25,
    color: "black",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 40,
  },
});
