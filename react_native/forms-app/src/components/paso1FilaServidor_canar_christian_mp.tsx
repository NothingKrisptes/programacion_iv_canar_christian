import { StyleSheet, Text, View } from 'react-native'
import type { Mascota } from './paso1_canar_christian_mp'

export function Paso1FilaMascota({ mascota }: { mascota: Mascota }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{mascota.nombre}</Text>
        <Text style={styles1.especie}>{mascota.especie}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          mascota.disponible ? styles1.estadoDisponible : styles1.estadoAdoptado,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {mascota.disponible ? 'DISPONIBLE' : 'ADOPTADO'}
        </Text>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  especie: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoDisponible: { backgroundColor: '#e8f5e9' },
  estadoAdoptado: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})
