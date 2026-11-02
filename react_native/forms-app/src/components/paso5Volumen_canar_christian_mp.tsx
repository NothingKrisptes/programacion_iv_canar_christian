// app/index.tsx — añade debajo de styles4
import { useState } from 'react'
import { Alert, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

type CamposFormulario = {
  base: string
  altura: string
  profundidad: string
}

type ErroresFormulario = {
  base: string | null
  altura: string | null
  profundidad: string | null
}

// Valida que el texto sea un número mayor que 0
function validarMedida(valor: string, nombre: string): string | null {
  if (valor.trim().length === 0) return `La ${nombre} es obligatoria`
  const numero = Number(valor)
  if (Number.isNaN(numero)) return `La ${nombre} debe ser un número`
  if (numero <= 0) return `La ${nombre} debe ser mayor a 0`
  return null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  return {
    base:        validarMedida(campos.base, 'base'),
    altura:      validarMedida(campos.altura, 'altura'),
    profundidad: validarMedida(campos.profundidad, 'profundidad'),
  }
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5Volumen() {
  const [campos, setCampos] = useState<CamposFormulario>({
    base: '',
    altura: '',
    profundidad: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    base: null,
    altura: null,
    profundidad: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe (UX más amigable)
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    const volumen = Number(campos.base) * Number(campos.altura) * Number(campos.profundidad)
    setEnviado(true)
    Alert.alert(
      'Volumen calculado',
      `${campos.base} × ${campos.altura} × ${campos.profundidad} = ${volumen} cm³`,
      [
        {
          text: 'Calcular otro',
          onPress: () => {
            setCampos({ base: '', altura: '', profundidad: '' })
            setErrores({ base: null, altura: null, profundidad: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Transportadora de mascotas</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Base (cm) *" error={errores.base}>
          <TextInput
            style={[
              styles5.campo,
              errores.base !== null && styles5.campoError,
            ]}
            value={campos.base}
            onChangeText={(v) => actualizarCampo('base', v)}
            placeholder="ej. 40"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Altura (cm) *" error={errores.altura}>
          <TextInput
            style={[
              styles5.campo,
              errores.altura !== null && styles5.campoError,
            ]}
            value={campos.altura}
            onChangeText={(v) => actualizarCampo('altura', v)}
            placeholder="ej. 30"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Profundidad (cm) *" error={errores.profundidad}>
          <TextInput
            style={[
              styles5.campo,
              errores.profundidad !== null && styles5.campoError,
            ]}
            value={campos.profundidad}
            onChangeText={(v) => actualizarCampo('profundidad', v)}
            placeholder="ej. 25"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Calculado' : 'Calcular volumen'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ea580c', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#ea580c',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#c2410c' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
