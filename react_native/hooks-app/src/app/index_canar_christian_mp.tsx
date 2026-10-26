// app/index.tsx
import { View, Text } from 'react-native'
import { Paso1 } from './paso1_canar_christian_mp'
import { Paso2 } from './paso2_canar_christian_mp'
import { Paso3 } from './paso3_canar_christian_mp'
import { Paso4 } from './paso4_canar_christian_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — contador de intentos de contacto         │
// │  2  Paso 2  useEffect — monitor de signos vitales con intervalo │
// │  3  Paso 3  useRef — foco en TextInput y contador sin re-render │
// │  4  Paso 4  Hooks nativos de RN — dimensiones, esquema de color │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
