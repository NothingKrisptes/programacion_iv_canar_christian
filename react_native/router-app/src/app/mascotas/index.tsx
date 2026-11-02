// app/mascotas/index.tsx
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router'


interface Mascota {
  id: string
  nombre: string
  especie: string
  estado: 'disponible' | 'en_proceso' | 'tratamiento'
}

const MASCOTAS: Mascota[] = [
  { id: '1', nombre: 'Firulais', especie: 'Perro',  estado: 'disponible'  },
  { id: '2', nombre: 'Mishi',    especie: 'Gato',   estado: 'disponible'  },
  { id: '3', nombre: 'Copito',   especie: 'Conejo', estado: 'en_proceso'  },
  { id: '4', nombre: 'Rocky',    especie: 'Perro',  estado: 'tratamiento' },
  { id: '5', nombre: 'Piolín',   especie: 'Ave',    estado: 'disponible'  },
]

const COLOR_ESTADO: Record<Mascota['estado'], string> = {
  disponible:  '#2e7d32',
  en_proceso:  '#e65100',
  tratamiento: '#c62828',
}

export default function ListaMascotas() {
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={MASCOTAS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/mascotas/${item.id}`)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.replace('_', ' ').toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.especie}>{item.especie}</Text>
          </Pressable>
        )}
      />

      {/* Alternativa declarativa — un Link que lleva a la primera mascota */}
      <Link href="/mascotas/1" style={styles.enlaceDirecto}>
        Ir directo a Firulais (Link declarativo)
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  lista:      { padding: 16, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#ffedd5' },
  fila:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre:     { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  especie:    { fontSize: 13, color: '#ea580c' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto:      { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#ea580c',
    fontSize: 14,
  },
})
