import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <Pressable
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
    >
      <Ionicons name={nombreIcono} size={18} color="#fff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4,
    gap: 8,
  },
  texto: { color: "#fff", fontWeight: "bold", fontSize: 14 },
});