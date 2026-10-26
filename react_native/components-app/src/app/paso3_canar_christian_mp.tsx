import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 3 — Props opcionales ───────────────────────────────────────

type EstadoMascota = 'disponible' | 'en_proceso' | 'adoptado' | 'cuarentena' | 'tratamiento'

interface BadgeEstadoProps {
  estado: EstadoMascota
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoMascota, { fondo: string; texto: string }> = {
  disponible:  { fondo: '#e8f5e9', texto: '#2e7d32' },
  en_proceso:  { fondo: '#fff8e1', texto: '#f57f17' },
  adoptado:    { fondo: '#f5f5f5', texto: '#616161' },
  cuarentena:  { fondo: '#fce4ec', texto: '#c62828' },
  tratamiento: { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoMascota, string> = {
  disponible:  '●',
  en_proceso:  '◐',
  adoptado:    '♥',
  cuarentena:  '✕',
  tratamiento: '✚',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.replace('_', ' ').toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaMascotaProps {
  nombre: string
  especie: string
  estado: EstadoMascota
  diasEnRefugio?: number   // opcional
  onPress?: () => void
}

function FilaMascota({ nombre, especie, estado, diasEnRefugio, onPress }: FilaMascotaProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreMascota}>{nombre}</Text>
        <Text style={estilos3.especieTexto}>{especie}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {diasEnRefugio !== undefined && (
          <Text style={estilos3.dias}>{diasEnRefugio} días en refugio</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado de las mascotas</Text>
      <FilaMascota nombre="Firulais" especie="Perro" estado="disponible" diasEnRefugio={45} onPress={() => console.log('Tocaste a Firulais')} />
      <FilaMascota nombre="Mishi"    especie="Gato"  estado="disponible" diasEnRefugio={12} />
      <FilaMascota nombre="Copito"   especie="Conejo" estado="en_proceso" diasEnRefugio={30} />
      <FilaMascota nombre="Rocky"    especie="Perro" estado="cuarentena" />
      <FilaMascota nombre="Luna"     especie="Gato"  estado="adoptado" />
      <FilaMascota nombre="Piolín"   especie="Ave"   estado="tratamiento" />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#fff7ed',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#9a3412',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreMascota: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  especieTexto: { fontSize: 12, color: '#a8a29e' },
  dias: { fontSize: 11, color: '#78716c' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
