import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3_canar_christian_mp'
import { Card, FilaInfo } from './paso2_canar_christian_mp'
import { ModalConfirm } from './paso5_canar_christian_mp'

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} registrado para Firulais`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Firulais</Text>
          <Text style={estilos6.cabSub}>Perro · Labrador · 2 años</Text>
        </View>
        <BadgeEstado estado="disponible" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de salud */}
        <Card titulo="Ficha médica" subtitulo="Última revisión: hace 3 días">
          <FilaInfo etiqueta="Vacunas" valor="Al día · 4 dosis" />
          <FilaInfo etiqueta="Desparasitado" valor="Sí" />
          <FilaInfo etiqueta="Esterilizado" valor="Sí" />
          <FilaInfo etiqueta="Peso" valor="24 kg" />
          <FilaInfo etiqueta="Microchip" valor="Registrado" />
        </Card>

        {/* Card de datos generales */}
        <Card titulo="Datos generales">
          <FilaInfo etiqueta="Carácter" valor="Juguetón y cariñoso" />
          <FilaInfo etiqueta="Convive con niños" valor="Sí" />
          <FilaInfo etiqueta="Convive con otros animales" valor="Sí" />
          <FilaInfo etiqueta="Refugio" valor="Huellitas Felices" />
          <FilaInfo etiqueta="En el refugio desde" valor="hace 45 días" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Adoptar"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Adopción')}
            />
            <BotonAccion
              etiqueta="Apadrinar"
              color="#ea580c"
              onPress={() => pedirConfirmacion('Apadrinamiento')}
            />
            <BotonAccion
              etiqueta="Agendar visita"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Visita al refugio')}
            />
            <BotonAccion
              etiqueta="Reportar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Reporte de problema')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Registrar "${accionPendiente}" para Firulais?\nEsta acción quedará guardada en su historial.`}
        etiquetaConfirmar="Registrar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff7ed',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#fed7aa',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9a3412',
  },
  cabSub: {
    fontSize: 12,
    color: '#78716c',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    lineHeight: 18,
  },
})
