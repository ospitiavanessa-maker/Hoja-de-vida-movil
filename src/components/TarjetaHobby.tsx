import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, descripcion, icono, onPress }: Props) => {
  return (
    <Pressable style={estilos.tarjeta} onPress={onPress}>
      <View style={estilos.iconoContenedor}>
        <Ionicons name={icono} size={28} color="#fff" />
      </View>
      <View style={estilos.textos}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    gap: 12,
  },
  iconoContenedor: {
    backgroundColor: "#7c3aed",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  textos: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  descripcion: { fontSize: 13, color: "#475569", marginTop: 2 },
});