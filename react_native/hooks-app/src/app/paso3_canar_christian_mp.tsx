import { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'

export function Paso3() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputNombreRef = useRef<TextInput>(null)
  const inputTelefonoRef = useRef<TextInput>(null)

  const [nombre, setNombre] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputNombreRef.current?.focus()
  }, [])

  // ── Uso 2: contador de envíos silencioso (no provoca re-render por sí mismo) ──
  const enviosSilenciososRef = useRef<number>(0)
  const [ultimaSolicitud, setUltimaSolicitud] = useState<string>('—')

  function enviarSolicitud() {
    enviosSilenciososRef.current += 1   // muta el ref sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al enviar
    setUltimaSolicitud(
      `${nombre || 'adoptante'} (${telefono || 'sin teléfono'}) — envío #${enviosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Solicitud de adopción</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del adoptante</Text>
        <TextInput
          ref={inputNombreRef}
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ana Gómez"
          placeholderTextColor="#aaa"
          returnKeyType="next"
          onSubmitEditing={() => inputTelefonoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Teléfono de contacto</Text>
        <TextInput
          ref={inputTelefonoRef}
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          placeholder="3001234567"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={enviarSolicitud}
      >
        <Text style={styles.textoBoton}>Enviar solicitud</Text>
      </Pressable>

      <Text style={styles.detalle}>Última solicitud: {ultimaSolicitud}</Text>
      <Text style={styles.detalle}>
        (el contador del ref no causa re-renders por sí mismo)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff7ed',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  formulario: {
    width: '100%',
    gap: 8,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#9a3412',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#ea580c',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})
