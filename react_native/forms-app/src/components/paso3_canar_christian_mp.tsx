// app/index.tsx — añade debajo de styles2
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import type { Mascota } from './paso1_canar_christian_mp'
import { Paso1FilaMascota } from './paso1FilaServidor_canar_christian_mp'
import { Paso3EncabezadoSeccion } from './paso3EncabezadoSeccion_canar_christian_mp'

type SeccionRefugio = {
  title: string
  zona: string
  data: Mascota[]
}

const SECCIONES: SeccionRefugio[] = [
  {
    title: 'Refugio Huellitas (Bogotá)',
    zona: 'bogota-norte',
    data: [
      { id: 's1', nombre: 'Firulais', especie: 'Perro',  disponible: true  },
      { id: 's2', nombre: 'Rocky',    especie: 'Perro',  disponible: true  },
      { id: 's3', nombre: 'Mishi',    especie: 'Gato',   disponible: true  },
    ],
  },
  {
    title: 'Refugio Patitas (Medellín)',
    zona: 'medellin-centro',
    data: [
      { id: 's4', nombre: 'Copito',   especie: 'Conejo', disponible: true  },
      { id: 's5', nombre: 'Luna',     especie: 'Gato',   disponible: false },
    ],
  },
  {
    title: 'Refugio Colitas (Cali)',
    zona: 'cali-sur',
    data: [
      { id: 's6', nombre: 'Toby',     especie: 'Perro',  disponible: true  },
      { id: 's7', nombre: 'Canela',   especie: 'Conejo', disponible: false },
      { id: 's8', nombre: 'Piolín',   especie: 'Ave',    disponible: true  },
    ],
  },
]

export function Paso3() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Refugios del país</Text>
      <SectionList<Mascota, SeccionRefugio>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaMascota mascota={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} zona={section.zona} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#ea580c',
    color: '#fff',
  },
})
