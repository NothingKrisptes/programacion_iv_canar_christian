import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoLectura = 'midiendo' | 'ok' | 'sin_lectura' | 'inactivo'

export function Paso2() {
  const [pulsaciones, setPulsaciones] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoLectura>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [lecturasFallidas, setLecturasFallidas] = useState<number>(0)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el monitor está detenido

    let temporizador: ReturnType<typeof setTimeout> | undefined

    const intervalo = setInterval(() => {
      setEstado('midiendo')

      // Simula la lectura del sensor: entre 60 y 180 pulsaciones por minuto
      // con un 15 % de probabilidad de no obtener lectura
      temporizador = setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setPulsaciones(null)
          setEstado('sin_lectura')
          setLecturasFallidas(n => n + 1)
        } else {
          const bpm = Math.floor(Math.random() * 120) + 60
          setPulsaciones(bpm)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    // ← función de limpieza: cancela el intervalo y la lectura pendiente
    return () => {
      clearInterval(intervalo)
      if (temporizador) clearTimeout(temporizador)
    }
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoLectura, string> = {
    midiendo:    '#ea580c',
    ok:          '#2e7d32',
    sin_lectura: '#c62828',
    inactivo:    '#757575',
  }

  const porcentajeFallidas = ciclos > 0
    ? ((lecturasFallidas / ciclos) * 100).toFixed(1) + '%'
    : '—'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitor de signos vitales — Firulais</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.replace('_', ' ').toUpperCase()}
        </Text>
        <Text style={styles.pulsaciones}>
          {pulsaciones !== null ? `${pulsaciones} bpm` : '— bpm'}
        </Text>
        <Text style={styles.fallidas}>
          Lecturas fallidas: {porcentajeFallidas}
        </Text>
        <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
        <Text style={styles.detalle}>Firulais · Perro labrador · Jaula 7</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener monitor' : 'Iniciar monitor'}
        </Text>
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
    borderColor: '#fed7aa',
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
  },
  pulsaciones: {
    fontSize: 22,
    fontWeight: '700',
    color: '#9a3412',
  },
  fallidas: {
    fontSize: 12,
    fontWeight: '600',
    color: '#c62828',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
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
  botonIniciar: {
    backgroundColor: '#ea580c',
  },
  botonDetener: {
    backgroundColor: '#de1010',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})
