// app/(modals)/agregar_canar_christian_mp.tsx
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'

export default function ModalAgregarMascota() {
  const [nombre,  setNombre]  = useState('')
  const [especie, setEspecie] = useState('')

  function guardar() {
    if (!nombre.trim() || !especie.trim()) return
    // En una app real: persistes en el store o llamas a la API
    console.log('Nueva mascota:', { nombre, especie })
    router.back()   // cierra el modal
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos de la nueva mascota que llega al refugio.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Nombre de la mascota</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="ej. Firulais"
          placeholderTextColor="#a8a29e"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Especie</Text>
        <TextInput
          style={styles.input}
          value={especie}
          onChangeText={setEspecie}
          placeholder="ej. Perro"
          placeholderTextColor="#a8a29e"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar mascota</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#292524',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#a8a29e', lineHeight: 20 },
  grupo:       { gap: 6 },
  etiqueta:    { fontSize: 13, color: '#d6d3d1', fontWeight: '500' },
  input: {
    backgroundColor: '#3a3532',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#f5f5f4',
    borderWidth: 1,
    borderColor: '#57534e',
  },
  boton: {
    backgroundColor: '#ea580c',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#c2410c' },
  botonTexto:      { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar:        { textAlign: 'center', color: '#a8a29e', fontSize: 14, padding: 8 },
})
