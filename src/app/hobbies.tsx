import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const hobbies = [
  {
    nombre: "Escuchar música",
    descripcion: "Me relaja y me acompaña mientras programo.",
    detalle: "Escucho música todos los días, sobre todo mientras estudio y desarrollo.",
    icono: "musical-notes" as const,
  },
  {
    nombre: "Ver series",
    descripcion: "Disfruto de series todo el tiempo.",
    detalle: "Me gusta ver series mientras hago mis cosas.",
    icono: "film" as const,
  },
  {
    nombre: "Programar",
    descripcion: "Crear apps y practicar nuevas tecnologías.",
    detalle: "Practico React Native, JavaScript y Python con proyectos propios.",
    icono: "code-slash" as const,
  },
];

const Hobbies = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Vanessa Ospitia</Text>
        <Text style={estilos.subtitulo}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        {hobbies.map((h) => (
          <TarjetaHobby
            key={h.nombre}
            nombre={h.nombre}
            descripcion={h.descripcion}
            icono={h.icono}
            onPress={() => Alert.alert(h.nombre, h.detalle)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});