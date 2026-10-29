// app/index.tsx — función Paso1
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1PicaPiedra() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#f3720f' }]}>
          <Text style={estilosPaso1.textoCaja}>Gran Gazu</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#f3720f' }]}>
          <Text style={estilosPaso1.textoCaja}>Dino</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#f3720f' }]}>
          <Text style={estilosPaso1.textoCaja}>Mr. Slate</Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#d4c04f' }]}>
          <Text style={estilosPaso1.textoCaja}>Personajes</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#d4c04f' }]}>
          <Text style={estilosPaso1.textoCaja}>Edad De Piedra</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#d4c04f' }]}>
          <Text style={estilosPaso1.textoCaja}>Trabajos</Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#2ccd9a', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Edad de Piedra (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#2ccd9a', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Garante</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#2ccd9a', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>DinoRun</Text>
        </View>
      </View>

      {/* ── flexWrap + gap ──────────────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={estilosPaso1.rejilla}>
        {['Vilma', 'Pedro', 'Pablo', 'Betty', 'Bam-Bam', 'Pebbles'].map((nombre) => (
          <View key={nombre} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa' },
  etiqueta:   { fontSize: 12, color: '#6c80aa', fontFamily: 'monospace' },
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
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 15 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#980f8f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})