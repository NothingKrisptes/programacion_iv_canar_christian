// app/index.tsx — añade debajo de styles5
import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export function Paso6() {
  const [nombre, setNombre] = useState('')
  const [especie, setEspecie] = useState('')
  const [edad, setEdad] = useState('')
  const [notas, setNotas] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onAgregar() {
    if (!nombre.trim() || !especie.trim() || !edad.trim()) {
      setError('Completa todos los campos antes de continuar')
      return
    }
    setError(null)
    Alert.alert('Mascota lista', `${nombre} · ${especie} · ${edad} meses\nNotas: ${notas || 'sin notas'}`)
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Cabecera fija */}
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Nueva mascota</Text>
          <Text style={styles6.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        {/* Cuerpo con scroll — los campos inferiores no quedan tapados */}
        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles6.etiquetaCampo}>Nombre de la mascota</Text>
          <TextInput
            style={styles6.campo}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Firulais"
            autoCorrect={false}
          />

          <Text style={styles6.etiquetaCampo}>Especie</Text>
          <TextInput
            style={styles6.campo}
            value={especie}
            onChangeText={setEspecie}
            placeholder="Perro"
          />

          <Text style={styles6.etiquetaCampo}>Edad (meses)</Text>
          <TextInput
            style={styles6.campo}
            value={edad}
            onChangeText={setEdad}
            placeholder="24"
            keyboardType="number-pad"
          />

          <Text style={styles6.etiquetaCampo}>Notas (opcional)</Text>
          <TextInput
            style={[styles6.campo, styles6.campoMultilinea]}
            value={notas}
            onChangeText={setNotas}
            placeholder="Cariñoso con los niños. Necesita una dieta especial y paseos diarios."
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onAgregar}
          >
            <Text style={styles6.textoBoton}>Registrar mascota</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#fff7ed' },
  cabecera: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#fed7aa', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#ea580c',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
