// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaPersonaje } from './paso1FilaPersonaje_canar_christian_mp'

export type MascotaTalento = {
  id: string
  nombre: string
  especie: string
  talento: string
}

const MASCOTAS_TALENTO: MascotaTalento[] = [
  { id: '1', nombre: 'Firulais', especie: 'Perro', talento: 'Da la patita' },
  { id: '2', nombre: 'Mishi',    especie: 'Gato',  talento: 'Abre puertas' },
  { id: '3', nombre: 'Rocky',    especie: 'Perro', talento: 'Trae la pelota' },
  { id: '4', nombre: 'Pelusa',   especie: 'Gato',  talento: '' },
]

export function Paso1Personaje() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Mascotas con talento</Text>
      <FlatList<MascotaTalento>
        data={MASCOTAS_TALENTO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaPersonaje mascota={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#ea580c',
    color: '#fff',
  },
})
