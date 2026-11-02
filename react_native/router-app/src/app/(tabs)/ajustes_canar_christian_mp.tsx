// app/(tabs)/ajustes_canar_christian_mp.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function TabAjustes() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Ajustes' }} />
      <Text style={styles.titulo}>Configuración</Text>
      <Text style={styles.item}>Recordatorio de vacunas: cada 30 días</Text>
      <Text style={styles.item}>Notificaciones: activas</Text>
      <Text style={styles.item}>Zona horaria: UTC-5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff7ed',
    padding: 24,
    gap: 16,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#9a3412' },
  item:   { fontSize: 15, color: '#44403c' },
})
