import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso1() {
  const [intentos, setIntentos] = useState<number>(0)
  const [contactado, setContactado] = useState<boolean>(false)

  function manejarReintento() {
    if (contactado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    // Simula éxito al tercer intento
    if (nuevoIntento >= 3) {
      setContactado(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setContactado(false)
  }

  const estadoTexto = contactado
    ? '✓ Adoptante contactado: Ana Gómez'
    : `Intento ${intentos} de 3 sin respuesta`

  const colorEstado = contactado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Contacto con el adoptante</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Ana Gómez · Solicitud para Firulais</Text>
      </View>
      <Text style={[styles.detalle, { color: colorEstado }]}>
        {intentos > 0 && !contactado ? 'Sin respuesta del adoptante' : ''}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          contactado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !contactado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={contactado}
      >
        <Text style={styles.textoBoton}>
          {contactado ? 'Contactado' : 'Reintentar contacto'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff7ed',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#ea580c',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#ea580c',
    fontSize: 14,
  },
})
