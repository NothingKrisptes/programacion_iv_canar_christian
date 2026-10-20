// ─── Paso 1 — Props tedadadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaPersonajeProps {
  nombre: string
  edad: number
  ocupacion: string
  frase: string
}

function TarjetaPersonaje({ nombre, edad, ocupacion, frase}: TarjetaPersonajeProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombrePersonaje}>{nombre}</Text>
      <Text style={styles.edadPersonaje}>{edad}</Text>
      <Text style={styles.ocupacionPersonaje}>{ocupacion}</Text>
      <Text style={styles.frasePersonaje}>{frase}</Text>
    </View>
  )
}

export function Paso1Simpson() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de servidores</Text>
      <TarjetaPersonaje
        nombre="Homero Simpson"
        edad={39}
        ocupacion="Inspector de seguridad"
        frase="D'Oh"
      />
      <TarjetaPersonaje
        nombre="Bart Simpson"
        edad={10}
        ocupacion="Estudiante"
        frase= "Multiplicate por cero"
      />
      <TarjetaPersonaje
        nombre="Lisa Simpson"
        edad = {8}
        ocupacion="Estudiante y saxofonista"
        frase= "Si alguien me necesita, estare en mi habitacion"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
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
    color: '#1a237e',
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
  nombrePersonaje: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  ocupacionPersonaje: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  edadPersonaje: {
    fontSize: 12,
    color: '#757575',
  },
  frasePersonaje: {
    fontSize: 12,
    color: '#757575',
  },
})