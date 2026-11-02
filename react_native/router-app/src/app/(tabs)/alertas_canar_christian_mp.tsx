// app/(tabs)/alertas_canar_christian_mp.tsx
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

interface Alerta {
  id:      string
  nivel:   'urgente' | 'aviso' | 'info'
  mensaje: string
  mascota: string
  tiempo:  string
}

const ALERTAS: Alerta[] = [
  { id: '1', nivel: 'urgente', mensaje: 'Necesita atención veterinaria', mascota: 'Rocky',   tiempo: 'hace 2 min' },
  { id: '2', nivel: 'urgente', mensaje: 'Sin comer desde ayer',          mascota: 'Piolín',  tiempo: 'hace 5 min' },
  { id: '3', nivel: 'aviso',   mensaje: 'Vacuna próxima a vencer',       mascota: 'Mishi',   tiempo: 'hace 18 min' },
  { id: '4', nivel: 'info',    mensaje: 'Adopción completada',           mascota: 'Luna',    tiempo: 'hace 1 h' },
]

const COLOR_NIVEL: Record<Alerta['nivel'], string> = {
  urgente: '#c62828',
  aviso:   '#e65100',
  info:    '#1565c0',
}

export default function TabAlertas() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff7ed' }}>
      <Stack.Screen options={{ title: 'Alertas' }} />
      <FlatList
        data={ALERTAS}
        keyExtractor={(a) => a.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        renderItem={({ item }) => (
          <View style={estAlertas.tarjeta}>
            <View style={estAlertas.cabecera}>
              <View style={[estAlertas.badge, { backgroundColor: COLOR_NIVEL[item.nivel] }]}>
                <Text style={estAlertas.badgeTexto}>{item.nivel.toUpperCase()}</Text>
              </View>
              <Text style={estAlertas.tiempo}>{item.tiempo}</Text>
            </View>
            <Text style={estAlertas.mensaje}>{item.mensaje}</Text>
            <Text style={estAlertas.mascota}>{item.mascota}</Text>
          </View>
        )}
      />
    </View>
  )
}

const estAlertas = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cabecera:  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  tiempo:     { fontSize: 12, color: '#a8a29e' },
  mensaje:    { fontSize: 14, color: '#1a1a1a', fontWeight: '500' },
  mascota:    { fontSize: 12, color: '#ea580c', fontWeight: '600' },
})
