import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const estudios = [
  {
    titulo: "Bachiller",
    institucion: "Colegio Fernando Gonzalez Ochoa",
    anio: 2014,
    enCurso: false,
  },
  {
    titulo: "Técnico",
    institucion: "Colegio Fernando Gonzalez Ochoa",
    anio: 2024,
    enCurso: false,
  },
  {
    titulo: "Tecnólogo en Análisis y Desarrollo de Software",
    institucion: "SENA",
    anio: 2026,
    enCurso: true,
  },
];

const Estudios = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Vanessa Ospitia</Text>
        <Text style={estilos.subtitulo}>Estudios</Text>
      </View>

      <View style={estilos.seccion}>
        {estudios.map((estudio) => (
          <TarjetaEstudio
            key={estudio.titulo}
            titulo={estudio.titulo}
            institucion={estudio.institucion}
            anio={estudio.anio}
            enCurso={estudio.enCurso}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Estudios;

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