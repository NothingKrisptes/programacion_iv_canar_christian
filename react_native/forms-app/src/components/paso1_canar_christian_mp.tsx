// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaMascota } from './paso1FilaServidor_canar_christian_mp'

export type Mascota = {
  id: string
  nombre: string
  especie: string
  disponible: boolean
}

export const MASCOTAS: Mascota[] = [
  { id: '1', nombre: 'Firulais', especie: 'Perro',  disponible: true  },
  { id: '2', nombre: 'Rocky',    especie: 'Perro',  disponible: true  },
  { id: '3', nombre: 'Mishi',    especie: 'Gato',   disponible: true  },
  { id: '4', nombre: 'Luna',     especie: 'Gato',   disponible: false },
  { id: '5', nombre: 'Copito',   especie: 'Conejo', disponible: true  },
  { id: '6', nombre: 'Canela',   especie: 'Conejo', disponible: false },
  { id: '7', nombre: 'Piolín',   especie: 'Ave',    disponible: true  },
  { id: '8', nombre: 'Toby',     especie: 'Perro',  disponible: true  },
]

export function Paso1() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Mascotas en adopción</Text>
      <FlatList<Mascota>
        data={MASCOTAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaMascota mascota={item} />}
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
