// app/index.tsx — añade Paso6
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso6() {
  const insets = useSafeAreaInsets()

  return (
    // SafeAreaView aplica padding automático en todos los lados seguros
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1917' }}>

      {/* Barra de cabecera pegada al área segura superior */}
      <View style={estilosPaso6.appBar}>
        <Text style={estilosPaso6.appBarTitulo}>Refugio Huellitas</Text>
        <Text style={estilosPaso6.appBarMeta}>8 mascotas</Text>
      </View>

      {/* Contenido scrolleable */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      >
        {['Firulais', 'Mishi', 'Copito', 'Rocky', 'Piolín'].map((nombre) => (
          <View key={nombre} style={estilosPaso6.fila}>
            <View style={estilosPaso6.punto} />
            <Text style={estilosPaso6.nombreMascota}>{nombre}</Text>
          </View>
        ))}

        {/* Panel de depuración: insets actuales */}
        <View style={estilosPaso6.debug}>
          <Text style={estilosPaso6.debugTitulo}>Safe Area Insets (dp)</Text>
          <Text style={estilosPaso6.debugLinea}>top:    {insets.top}</Text>
          <Text style={estilosPaso6.debugLinea}>bottom: {insets.bottom}</Text>
          <Text style={estilosPaso6.debugLinea}>left:   {insets.left}</Text>
          <Text style={estilosPaso6.debugLinea}>right:  {insets.right}</Text>
        </View>
      </ScrollView>

      {/* Barra inferior flotante — respeta el inset inferior manualmente */}
      <View style={[estilosPaso6.barraInferior, { paddingBottom: insets.bottom + 8 }]}>
        <Text style={estilosPaso6.barraInferiorTexto}>
          Última actualización: hace 30 segundos
        </Text>
      </View>

    </SafeAreaView>
  )
}

const estilosPaso6 = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#292524',
    borderBottomWidth: 1,
    borderBottomColor: '#44403c',
  },
  appBarTitulo: { fontSize: 18, fontWeight: '700', color: '#f5f5f4' },
  appBarMeta:   { fontSize: 13, color: '#a8a29e' },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292524',
    borderRadius: 8,
    padding: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#44403c',
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3fb950',
  },
  nombreMascota: { fontSize: 14, color: '#f5f5f4', fontWeight: '500' },
  debug: {
    backgroundColor: '#3a3532',
    borderRadius: 8,
    padding: 12,
    gap: 2,
    marginTop: 8,
  },
  debugTitulo: { fontSize: 12, color: '#fb923c', fontWeight: '600', marginBottom: 4 },
  debugLinea:  { fontSize: 12, color: '#a8a29e', fontFamily: 'monospace' },
  barraInferior: {
    backgroundColor: '#292524',
    paddingTop: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#44403c',
    alignItems: 'center',
  },
  barraInferiorTexto: { fontSize: 12, color: '#a8a29e' },
})
