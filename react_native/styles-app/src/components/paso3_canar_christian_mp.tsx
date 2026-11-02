// app/index.tsx — añade la función Paso3
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Mascota = {
  id: string
  nombre: string
  raza: string
  estado: 'disponible' | 'en_proceso' | 'adoptado'
  energia: number
}

const MASCOTAS: Mascota[] = [
  { id: '1', nombre: 'Firulais', raza: 'Labrador',  estado: 'disponible', energia: 82 },
  { id: '2', nombre: 'Mishi',    raza: 'Siamés',    estado: 'disponible', energia: 45 },
  { id: '3', nombre: 'Rocky',    raza: 'Mestizo',   estado: 'en_proceso', energia: 91 },
  { id: '4', nombre: 'Copito',   raza: 'Enano',     estado: 'disponible', energia: 55 },
  { id: '5', nombre: 'Luna',     raza: 'Angora',    estado: 'adoptado',   energia: 30 },
  { id: '6', nombre: 'Toby',     raza: 'Beagle',    estado: 'disponible', energia: 88 },
  { id: '7', nombre: 'Piolín',   raza: 'Canario',   estado: 'disponible', energia: 70 },
  { id: '8', nombre: 'Nala',     raza: 'Mestiza',   estado: 'en_proceso', energia: 50 },
]

const COLOR_ESTADO: Record<Mascota['estado'], string> = {
  disponible: '#2e7d32',
  en_proceso: '#e65100',
  adoptado:   '#78716c',
}

export function Paso3() {
  const { width } = useWindowDimensions()

  // Grid responsivo: 2 columnas en teléfono (< 600dp), 4 en tablet (≥ 600dp)
  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff7ed' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Mascotas · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {MASCOTAS.map((m) => (
          <TarjetaMascota
            key={m.id}
            mascota={m}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaMascota({
  mascota,
  ancho,
}: {
  mascota: Mascota
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[mascota.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      {/* Indicador de estado */}
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreMascota} numberOfLines={1}>
        {mascota.nombre}
      </Text>
      <Text style={estilosPaso3.raza}>{mascota.raza}</Text>

      {/* Barra de energía */}
      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${mascota.energia}%`,
              backgroundColor: mascota.energia > 80 ? '#c2410c' : '#ea580c',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.energia}>Energía: {mascota.energia}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#78716c',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreMascota: { fontSize: 13, fontWeight: '700', color: '#1c1917' },
  raza:          { fontSize: 11, color: '#78716c' },
  barraFondo: {
    height: 6,
    backgroundColor: '#fed7aa',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  energia:      { fontSize: 11, color: '#78716c' },
})
