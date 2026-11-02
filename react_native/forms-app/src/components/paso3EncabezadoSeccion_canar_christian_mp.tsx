import { StyleSheet, Text, View } from 'react-native'

export function Paso3EncabezadoSeccion({ titulo, zona }: { titulo: string; zona: string }) {
  return (
    <View style={styles3.encabezado}>
      <Text style={styles3.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles3.encabezadoZona}>{zona}</Text>
    </View>
  )
}

const styles3 = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffedd5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#ea580c',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#9a3412' },
  encabezadoZona: { fontSize: 11, color: '#78716c', fontFamily: 'monospace' },
})
