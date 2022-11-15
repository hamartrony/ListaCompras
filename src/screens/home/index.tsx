import { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participante } from "../../components/participantes/intex";
import { styles } from "./styles";

export default function Home() {
  //States
  const [user, setUser] = useState("");
  const [participantes, setParticipantes] = useState<string[]>([]);

  //Adicionar Item
  function adduser(user: string) {
    if (participantes.includes(user)) {
      return Alert.alert(
        "Item Duplicado",
        "Ja existe algo com esse nome na lista"
      );
    } else {
      setParticipantes((prevState) => [...prevState, user]);
      setUser("");
    }
  }

  //Remover Item
  function removeUser(user: string) {
    Alert.alert("Remover", `Remover o item ${user}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipantes(participantes.filter((item) => item !== user));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  //Render
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Lista de Compras</Text>
      <Text style={styles.p}>Digite o nome do protudo:</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.inputs}
          placeholder={"Digite o nome"}
          placeholderTextColor="white"
          keyboardType="default"
          value={user}
          onChangeText={(user) => setUser(user)}
        />
        <TouchableOpacity style={styles.button} onPress={() => adduser(user)}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ width: "90%" }}
        showsVerticalScrollIndicator={false}
        data={participantes}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={styles.h1}>Voce ainda nao salvou nenhum produto!</Text>
        )}
        renderItem={({ item }) => (
          <Participante
            key={item}
            name={item}
            onRemove={() => removeUser(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}
