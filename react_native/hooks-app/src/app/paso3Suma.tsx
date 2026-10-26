// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, Component, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3Suma() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputHostRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputPuertoRef = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [numero1, setNumero1] = useState<number>()
  const [numero2, setNumero2] = useState<number>()

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSumadosRef = useRef<number>(0)
  const [suma, setSuma] = useState<string>('-')

  function intentarConexion() {
    intentosSumadosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al conectar
    setSuma(
      `${numero1 || 'servidor'}:${numero2} + intento #${intentosSumadosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Suma de dos numeros</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Numero 1: </Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={numero1}
          onChangeNumber={setNumero1}
          placeholder="6"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Numero 2: </Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={numero2}
          onChangeNumber={setNumero2}
          placeholder="8"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>
      <Text style={styles.detalle}>SUMA:</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
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
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#893006',
  },
  latencia: {
    fontSize: 10,
    fontWeight: '600',
    color: '#09e3a5',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  input: {
    fontSize: 13,
    color: '#666',
  },
  formulario: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#de1010',
  },
 textoBoton: {
    fontSize: 13,
    color: '#f1ecec',
  },
})