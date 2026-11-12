import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View
      style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}
    >
      <Text style={estilos.titulo}>{titulo}</Text>

      {enCurso && (
        <View style={estilos.badge}>
          <Text style={estilos.badgeTexto}>En Curso</Text>
        </View>
      )}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1 },
  finalizado: { backgroundColor: "#ffffff", borderColor: "#ccc" },
  enCurso: { backgroundColor: "#eef2ff", borderColor: "#6366f1" },
  titulo: { fontSize: 16, fontWeight: "bold" },
  subtitulo: { fontSize: 14, color: "#555" },
  anio: { fontSize: 12, color: "#888" },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#7c3aed",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    marginVertical: 4,
  },
  badgeTexto: { color: "#fff", fontSize: 12, fontWeight: "bold" },
});