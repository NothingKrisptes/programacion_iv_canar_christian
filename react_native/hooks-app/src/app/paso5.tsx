import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


import {
  UsuarioProvider,
  useUsuario,
  useCargo,
} from '../context/UsuarioContext';


// Componente que consume el contexto
function Perfil() {
  const { usuario, setUsuario } = useUsuario();
  const { cargo, setCargo } = useCargo();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Hola, {usuario}
      </Text>

      <Button
        title="Cambiar usuario"
        onPress={() =>
          setUsuario('Homero Simpson')
        }
      />

      <Text style={styles.texto}>
        Cargo, {cargo}
      </Text>
      
      <Button
        title="Cambiar cargo"
        onPress={() =>
          setCargo('Obrero de Fábrica')
        }
      />
    </View>
  );
}


// Componente principal
export default function Paso5() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
