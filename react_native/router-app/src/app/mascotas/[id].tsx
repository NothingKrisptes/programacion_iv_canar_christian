// app/mascotas/[id].tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, router } from 'expo-router'

interface DetalleMascota {
  nombre:        string
  especie:       string
  raza:          string
  edad:          string
  peso:          string
  salud:         string
  vacunas:       string[]
  ultimoControl: string
}

const DB_MASCOTAS: Record<string, DetalleMascota> = {
  '1': {
    nombre: 'Firulais', especie: 'Perro', raza: 'Labrador',
    edad: '2 años', peso: '24 kg', salud: 'Excelente',
    vacunas: ['Rabia', 'Parvovirus', 'Moquillo'],
    ultimoControl: 'hace 3 días',
  },
  '2': {
    nombre: 'Mishi', especie: 'Gato', raza: 'Siamés',
    edad: '1 año y medio', peso: '4 kg', salud: 'Buena',
    vacunas: ['Rabia', 'Triple felina'],
    ultimoControl: 'hace 1 semana',
  },
  '3': {
    nombre: 'Copito', especie: 'Conejo', raza: 'Enano',
    edad: '8 meses', peso: '1.2 kg', salud: 'Buena',
    vacunas: ['Mixomatosis'],
    ultimoControl: 'hace 2 semanas',
  },
  '4': {
    nombre: 'Rocky', especie: 'Perro', raza: 'Mestizo',
    edad: '4 años', peso: '18 kg', salud: 'En tratamiento',
    vacunas: ['Rabia', 'Parvovirus'],
    ultimoControl: 'hoy',
  },
  '5': {
    nombre: 'Piolín', especie: 'Ave', raza: 'Canario',
    edad: '1 año', peso: '25 g', salud: 'En observación',
    vacunas: ['Newcastle'],
    ultimoControl: 'hace 5 días',
  },
}

function FilaDetalle({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleMascotaPantalla() {
  // useLocalSearchParams lee el segmento capturado por [id].tsx
  const { id } = useLocalSearchParams<{ id: string }>()
  const mascota = DB_MASCOTAS[id ?? '']

  if (!mascota) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrada' }} />
        <Text style={styles.error}>Mascota "{id}" no encontrada</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver a la lista
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: mascota.nombre }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreMascota}>{mascota.nombre}</Text>
        <Text style={styles.especieMascota}>{mascota.especie} · {mascota.raza}</Text>
        <Text style={styles.edadMascota}>{mascota.edad}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>DATOS GENERALES</Text>
        <FilaDetalle etiqueta="Edad"  valor={mascota.edad} />
        <FilaDetalle etiqueta="Peso"  valor={mascota.peso} />
        <FilaDetalle etiqueta="Salud" valor={mascota.salud} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>CUIDADOS</Text>
        <FilaDetalle etiqueta="Último control" valor={mascota.ultimoControl} />
        {mascota.vacunas.map((v) => (
          <FilaDetalle key={v} etiqueta="Vacuna" valor={v} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:      { flex: 1, backgroundColor: '#fff7ed' },
  contenido:   { padding: 16, gap: 16 },
  centrado:    { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:       { fontSize: 16, color: '#c62828' },
  enlace:      { fontSize: 14, color: '#ea580c' },
  encabezado: {
    backgroundColor: '#ea580c',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreMascota:  { fontSize: 22, fontWeight: '700', color: '#fff' },
  especieMascota: { fontSize: 14, color: '#ffedd5' },
  edadMascota:    { fontSize: 13, color: '#fed7aa' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78716c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#78716c', fontWeight: '500' },
  valor:    { fontSize: 13, color: '#1a1a1a', flexShrink: 1, textAlign: 'right' },
})
