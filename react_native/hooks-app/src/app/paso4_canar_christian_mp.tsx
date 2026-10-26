import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export function Paso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:   esquema === 'dark' ? '#1c1917' : '#fff7ed',
    tarjeta: esquema === 'dark' ? '#292524' : '#ffffff',
    texto:   esquema === 'dark' ? '#f5f5f4' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#a8a29e' : '#666666',
    borde:   esquema === 'dark' ? '#44403c' : '#fed7aa',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const mascotas = [
    { nombre: 'Firulais', especie: 'Perro',  estado: 'disponible' },
    { nombre: 'Mishi',    especie: 'Gato',   estado: 'disponible' },
    { nombre: 'Copito',   especie: 'Conejo', estado: 'en proceso' },
    { nombre: 'Piolín',   especie: 'Ave',    estado: 'disponible' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Mascotas del refugio
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de mascotas con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {mascotas.map(m => (
          <View
            key={m.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreMascota, { color: colores.texto }]}>
              {m.nombre}
            </Text>
            <Text style={[styles.especieMascota, { color: colores.detalle }]}>
              {m.especie}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: m.estado === 'disponible' ? '#2e7d32' : '#f57f17',
            }}>
              {m.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde, backgroundColor: colores.tarjeta }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context.
          El hook expone los valores numéricos {'{'}top, bottom, left, right{'}'} para
          cuando necesitas posicionar elementos manualmente respetando el notch y la
          barra de inicio.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    gap: 6,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
  },
  nombreMascota: {
    fontSize: 15,
    fontWeight: '700',
  },
  especieMascota: {
    fontSize: 13,
  },
  nota: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    gap: 6,
  },
  notaTexto: {
    fontSize: 12,
    fontWeight: '500',
  },
})
