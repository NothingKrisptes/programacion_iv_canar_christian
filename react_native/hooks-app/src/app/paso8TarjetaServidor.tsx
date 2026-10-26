
// app/index.tsx — agrega la función Paso5
// (en un proyecto real importarías desde '@/hooks/useConexionSimulada')
import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { StyleSheet, Text, View, Pressable } from 'react-native'

// Para este tutorial pegamos el hook inline arriba del componente:
// (copia aquí el código del archivo hooks/useConexionSimulada.ts)

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

export function TarjetaServidor({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando:   '#1565c0',
    conectado:    '#2e7d32',
    error:        '#c62828',
  }

  const textoBoton: Record<string, string> = {
    desconectado: 'Conectar',
    conectando:   'Conectando…',
    conectado:    'Reconectar',
    error:        'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreServidor}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Intentos: {intentos}
        {latencia !== null ? `  ·  Latencia: ${latencia} ms` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            styles.botonActivo,
            estado === 'conectando' && styles.botonDeshabilitado,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={reconectar}
          disabled={estado === 'conectando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonSecundario,
            pressed && { opacity: 0.75 },
            { paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#1565c0', justifyContent: 'center' },
          ]}
          onPress={reiniciar}
        >
          <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar</Text>
        </Pressable>
      </View>
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
  nombreServidor: {
    fontSize: 10,
    fontWeight: '600',
    color: '#0dc28e',
  },
  notaTexto: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#ab0000',
  },
 textoSecundario: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  ipServidor: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonSecundario: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1520c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#de1010',
  },
 textoBoton: {
    fontSize: 13,
    color: '#f1ecec',
  },
})