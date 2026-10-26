import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const MASCOTAS_DEMO = [
  { id: '1',  nombre: 'Firulais', especie: 'Perro',  raza: 'Labrador',      energia: 80, sociabilidad: 90 },
  { id: '2',  nombre: 'Mishi',    especie: 'Gato',   raza: 'Siamés',        energia: 45, sociabilidad: 70 },
  { id: '3',  nombre: 'Copito',   especie: 'Conejo', raza: 'Enano',         energia: 60, sociabilidad: 55 },
  { id: '4',  nombre: 'Rocky',    especie: 'Perro',  raza: 'Mestizo',       energia: 92, sociabilidad: 85 },
  { id: '5',  nombre: 'Piolín',   especie: 'Ave',    raza: 'Canario',       energia: 70, sociabilidad: 30 },
  { id: '6',  nombre: 'Luna',     especie: 'Gato',   raza: 'Angora',        energia: 35, sociabilidad: 65 },
  { id: '7',  nombre: 'Toby',     especie: 'Perro',  raza: 'Beagle',        energia: 88, sociabilidad: 92 },
  { id: '8',  nombre: 'Nala',     especie: 'Gato',   raza: 'Mestiza',       energia: 50, sociabilidad: 75 },
  { id: '9',  nombre: 'Bruno',    especie: 'Perro',  raza: 'Pastor Alemán', energia: 95, sociabilidad: 60 },
  { id: '10', nombre: 'Canela',   especie: 'Conejo', raza: 'Cabeza de León', energia: 40, sociabilidad: 80 },
  { id: '11', nombre: 'Max',      especie: 'Perro',  raza: 'Bulldog',       energia: 25, sociabilidad: 50 },
  { id: '12', nombre: 'Pelusa',   especie: 'Gato',   raza: 'Persa',         energia: 30, sociabilidad: 88 },
]

interface BarraNivelProps {
  porcentaje: number
  etiqueta: string
}

function BarraNivel({ porcentaje, etiqueta }: BarraNivelProps) {
  const color = porcentaje > 70 ? '#2e7d32'
              : porcentaje > 40 ? '#f57f17'
              : '#c62828'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%`, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaResumen({ nombre, especie, raza, energia, sociabilidad }: typeof MASCOTAS_DEMO[0]) {
  return (
    <View style={estilos4.mascota}>
      <View style={estilos4.mascotaEncabezado}>
        <Text style={estilos4.mascotaNombre}>{nombre}</Text>
        <Text style={estilos4.mascotaEspecie}>{especie}</Text>
      </View>
      <Text style={estilos4.mascotaRaza}>{raza}</Text>
      <BarraNivel porcentaje={energia} etiqueta="Energía" />
      <BarraNivel porcentaje={sociabilidad} etiqueta="Social" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Mascotas del refugio</Text>
        <Text style={estilos4.headerSub}>{MASCOTAS_DEMO.length} mascotas esperando un hogar</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {MASCOTAS_DEMO.map((m) => (
          <TarjetaResumen key={m.id} {...m} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#292524',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#44403c',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffedd5',
  },
  headerSub: {
    fontSize: 12,
    color: '#a8a29e',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  mascota: {
    backgroundColor: '#3a3532',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#57534e',
  },
  mascotaEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  mascotaNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffedd5',
  },
  mascotaEspecie: {
    fontSize: 12,
    color: '#fb923c',
  },
  mascotaRaza: {
    fontSize: 11,
    color: '#a8a29e',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#a8a29e',
    width: 48,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#57534e',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})
