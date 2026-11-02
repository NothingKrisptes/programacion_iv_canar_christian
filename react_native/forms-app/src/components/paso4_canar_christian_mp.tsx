// app/index.tsx — añade debajo de styles3
import { useRef, useState } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4() {
  const [nombre, setNombre] = useState('')
  const [especie, setEspecie] = useState('')
  const [edad, setEdad] = useState('')
  const [pin, setPin] = useState('')
  const [mostrarPin, setMostrarPin] = useState(false)

  const refEspecie = useRef<TextInput>(null)
  const refEdad = useRef<TextInput>(null)
  const refPin = useRef<TextInput>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registrar adopción</Text>

      {/* Nombre de la mascota */}
      <Text style={styles4.etiqueta}>Nombre de la mascota</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. Firulais"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refEspecie.current?.focus()}
      />

      {/* Especie */}
      <Text style={styles4.etiqueta}>Especie</Text>
      <TextInput
        ref={refEspecie}
        style={styles4.campo}
        value={especie}
        onChangeText={setEspecie}
        placeholder="Perro, Gato, Conejo..."
        returnKeyType="next"
        onSubmitEditing={() => refEdad.current?.focus()}
      />

      {/* Edad en meses */}
      <Text style={styles4.etiqueta}>Edad (meses)</Text>
      <TextInput
        ref={refEdad}
        style={styles4.campo}
        value={edad}
        onChangeText={setEdad}
        placeholder="24"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refPin.current?.focus()}
      />

      {/* PIN del adoptante */}
      <Text style={styles4.etiqueta}>PIN del adoptante</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refPin}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={pin}
          onChangeText={setPin}
          placeholder="••••"
          secureTextEntry={!mostrarPin}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <Pressable
          onPress={() => setMostrarPin((v) => !v)}
          style={styles4.togglePin}
        >
          <Text style={styles4.togglePinTexto}>
            {mostrarPin ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          adopcion: {nombre || '<nombre>'} ({especie || '<especie>'}, {edad || '0'} meses)
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePin: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffedd5',
    borderRadius: 8,
  },
  togglePinTexto: { fontSize: 13, color: '#ea580c', fontWeight: '600' },
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
