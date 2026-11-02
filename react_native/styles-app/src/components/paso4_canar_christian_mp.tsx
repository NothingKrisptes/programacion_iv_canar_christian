// app/index.tsx — añade la función Paso4
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

// Función utilitaria que devuelve el estilo de sombra correcto según plataforma
function sombra(nivel: 1 | 2 | 3): object {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: {
      elevation: nivel * 3,
    },
    default: {},
  }) ?? {}
}

type EstadoMascota = 'disponible' | 'en_proceso' | 'adoptado'

export function Paso4() {
  const plataforma = Platform.OS

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff7ed' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View style={estilosPaso4.cabecera}>
        <Text style={estilosPaso4.plataforma}>
          Plataforma detectada: {plataforma}
        </Text>
      </View>

      {/* ── Tarjeta con sombra nivel 1 ──────────────────────────── */}
      <TarjetaSombreada nivel={1} titulo="Firulais" estado="disponible" raza="Perro · Labrador" />

      {/* ── Tarjeta con sombra nivel 2 ──────────────────────────── */}
      <TarjetaSombreada nivel={2} titulo="Mishi" estado="en_proceso" raza="Gato · Siamés" />

      {/* ── Tarjeta con sombra nivel 3 ──────────────────────────── */}
      <TarjetaSombreada nivel={3} titulo="Luna" estado="adoptado" raza="Gato · Angora" />

      {/* ── Comparativa visual del código ──────────────────────── */}
      <View style={estilosPaso4.bloque}>
        <Text style={estilosPaso4.bloqueTexto}>
          {Platform.OS === 'ios'
            ? 'iOS: usando shadowColor + shadowOffset + shadowOpacity + shadowRadius'
            : Platform.OS === 'android'
              ? 'Android: usando elevation'
              : 'Web: sin sombras nativas'}
        </Text>
      </View>

    </ScrollView>
  )
}

function TarjetaSombreada({
  nivel,
  titulo,
  estado,
  raza,
}: {
  nivel: 1 | 2 | 3
  titulo: string
  estado: EstadoMascota
  raza: string
}) {
  const coloresEstado: Record<EstadoMascota, string> = {
    disponible: '#2e7d32',
    en_proceso: '#e65100',
    adoptado:   '#78716c',
  }

  return (
    <View style={[estilosPaso4.tarjeta, sombra(nivel)]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={estilosPaso4.titulo}>{titulo}</Text>
        <View style={[estilosPaso4.badge, { backgroundColor: coloresEstado[estado] }]}>
          <Text style={estilosPaso4.badgeTexto}>{estado.replace('_', ' ')}</Text>
        </View>
      </View>
      <Text style={estilosPaso4.raza}>{raza}</Text>
      <Text style={estilosPaso4.nivelTexto}>Sombra nivel {nivel}</Text>
    </View>
  )
}

const estilosPaso4 = StyleSheet.create({
  cabecera: {
    backgroundColor: '#ea580c',
    borderRadius: 8,
    padding: 12,
  },
  plataforma: { color: '#fff', fontWeight: '700', fontSize: 14 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  titulo:     { fontSize: 15, fontWeight: '700', color: '#1c1917' },
  raza:       { fontSize: 12, color: '#78716c' },
  nivelTexto: { fontSize: 11, color: '#a8a29e', marginTop: 4 },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  bloque: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
  bloqueTexto: { fontSize: 13, color: '#92400e' },
})
