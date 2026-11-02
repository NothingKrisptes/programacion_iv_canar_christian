// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Paso1FilaServidor } from './paso1FilaServidor'
import { Paso1FilaPersonaje } from './paso1FilaPersonaje'

export type Servidor = {
  id: string
  nombre: string
  serie: string
  poder: string
}

const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'Satoru Gojo',   serie: 'Jujutsu Kaisen', poder : "El infinito"  },
  { id: '2', nombre: 'Killua',   serie: 'HxH', poder: "Electricidad"  },
  { id: '3', nombre: 'Gon', serie: 'HxH', poder: 'Piedra, papel y tijera'  },
]



export function Paso1Personaje() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de servidores</Text>
      <FlatList<Servidor>
        data={SERVIDORES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaPersonaje servidor={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
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
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})