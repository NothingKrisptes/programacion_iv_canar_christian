// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaMascotaProps {
  nombre: string
  especie: string
  raza: string
  edadMeses: number
  refugio?: string
}

function TarjetaMascota({ nombre, especie, raza, edadMeses, refugio }: TarjetaMascotaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreMascota}>{nombre}</Text>
      <Text style={styles.datoEspecie}>{especie} · {edadMeses} meses</Text>
      <Text style={styles.datoRaza}>{raza}</Text>
      <Text style={styles.datoRefugio}>{refugio ?? 'Sin refugio asignado'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Mascotas en adopción</Text>
      <TarjetaMascota
        nombre="Firulais"
        especie="Perro"
        raza="Labrador"
        edadMeses={24}
        refugio="Huellitas Felices"
      />
      <TarjetaMascota
        nombre="Mishi"
        especie="Gato"
        raza="Siamés"
        edadMeses={18}
        refugio="Patitas Unidas"
      />
      <TarjetaMascota
        nombre="Copito"
        especie="Conejo"
        raza="Enano"
        edadMeses={8}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#fff7ed',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#9a3412',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreMascota: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoEspecie: {
    fontSize: 13,
    color: '#c2410c',
  },
  datoRaza: {
    fontSize: 12,
    color: '#757575',
  },
  datoRefugio: {
    fontSize: 12,
    color: '#757575',
  },
})
