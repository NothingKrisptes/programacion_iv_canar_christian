// app/index.tsx — añade debajo de styles3
import { useRef, useState } from 'react'
import { TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4Volumen() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')

  const refAltura = useRef<TextInput>(null)
  const refProfundidad = useRef<TextInput>(null)

  const b = Number(base)
  const a = Number(altura)
  const p = Number(profundidad)
  const hayDatos = base !== '' && altura !== '' && profundidad !== ''
  const volumen = hayDatos ? b * a * p : null

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Volumen de la transportadora</Text>

      {/* Base */}
      <Text style={styles4.etiqueta}>Ingrese la base (cm): </Text>
      <TextInput
        style={styles4.campo}
        value={base}
        onChangeText={setBase}
        placeholder="ej. 40"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
      />

      {/* Altura */}
      <Text style={styles4.etiqueta}>Ingrese la altura (cm): </Text>
      <TextInput
        ref={refAltura}
        style={styles4.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="ej. 30"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
      />

      {/* Profundidad */}
      <Text style={styles4.etiqueta}>Ingrese la profundidad (cm): </Text>
      <TextInput
        ref={refProfundidad}
        style={styles4.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="ej. 25"
        keyboardType="numeric"
        returnKeyType="done"
      />

      {/* Resultado */}
      <Text style={styles4.etiqueta}>Resultado: </Text>
      <TextInput
        style={styles4.campo}
        value={volumen !== null && !Number.isNaN(volumen) ? `${volumen} cm³` : ''}
        placeholder="—"
        editable={false}
      />

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          volumen = {base || '<base>'} × {altura || '<altura>'} × {profundidad || '<profundidad>'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#ea580c', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#292524',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})
