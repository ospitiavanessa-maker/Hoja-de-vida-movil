import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const experiencias = [
  {
    cargo: "Aprendiz ADSO",
    empresa: "SENA - Etapa productiva",
    periodo: "2026 - Actualidad",
    descripcion: "Desarrollo de aplicaciones móviles con React Native y Expo.",
  },
  {
    cargo: "Auxiliar de peluqueria",
    empresa: "Sandra Sierra",
    periodo: "2025",
    descripcion: "Alisado de cabello, lavado, aseo general y atención al cliente.",
  },
  {
    cargo: "Atención al cliente",
    empresa: "Panadería",
    periodo: "2026",
    descripcion: "Atención al cliente, venta de productos y aseo general del local.",
  },
];

const Experiencia = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Vanessa Ospitia</Text>
        <Text style={estilos.subtitulo}>Experiencia Laboral</Text>
      </View>

      <View style={estilos.seccion}>
        {experiencias.map((exp) => (
          <TarjetaExperiencia
            key={exp.cargo}
            cargo={exp.cargo}
            empresa={exp.empresa}
            periodo={exp.periodo}
            descripcion={exp.descripcion}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Experiencia;

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