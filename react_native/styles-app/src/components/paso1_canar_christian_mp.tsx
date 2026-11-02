// app/index.tsx — función Paso1
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#c2410c' }]}>
          <Text style={estilosPaso1.textoCaja}>Firulais</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#ea580c' }]}>
          <Text style={estilosPaso1.textoCaja}>Mishi</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#f97316' }]}>
          <Text style={estilosPaso1.textoCaja}>Copito</Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2e7d32' }]}>
          <Text style={estilosPaso1.textoCaja}>Perros</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#388e3c' }]}>
          <Text style={estilosPaso1.textoCaja}>Gatos</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#43a047' }]}>
          <Text style={estilosPaso1.textoCaja}>Conejos</Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#1565c0', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Disponibles (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#1976d2', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>En proceso</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#42a5f5', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Adoptados</Text>
        </View>
      </View>

      {/* ── flexWrap + gap ──────────────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={estilosPaso1.rejilla}>
        {['cachorros', 'adultos', 'senior', 'gatitos', 'conejos', 'aves'].map((nombre) => (
          <View key={nombre} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#fff7ed' },
  etiqueta:   { fontSize: 12, color: '#78716c', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column', // explícito para que sea visible
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#ea580c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})
