import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, List } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  
  const Lista = ({ item }) => {
    const { Ajudante, Valor, Disponibilidade, Especialidade, Idade } = item;

    return (
      <TouchableOpacity
        style={styles.Caixainf}
        onPress={() => (Ajudante, Valor, Disponibilidade, Especialidade, Idade)}
      >
        <Ionicons name="person-circle" size={40} color="#333" style={styles.icone} />
        <View style={styles.TextoContainer}>
          <Text style={styles.Texto}>{`Ajudante: ${Ajudante}`}</Text>
          <Text style={styles.Texto}>{`Idade: ${Idade}`}</Text>
          <Text style={styles.Texto}>{`Valor: ${Valor}`}</Text>
          <Text style={styles.Texto}>{`Dias Disponíveis: ${Disponibilidade}`}</Text>
          <Text style={styles.Texto}>{`Especialidade: ${Especialidade}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Containerstyle}>
        <Text style={styles.Titulo}>Informações dos Assistentes</Text>
        <FlatList
          data={[
            { Ajudante: 'Zorilda Vasconcelos', Valor: '60 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/XX', Especialidade: 'Deficientes Visuais', Idade: '30 Anos' },
            { Ajudante: 'Polly Neves', Valor: '80 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/XX', Especialidade: 'Deficientes Fisicos', Idade: '29 Anos' },
            { Ajudante: 'Maria do Socorro', Valor: '75 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Auditivos', Idade: '28 Anos' },
            { Ajudante: 'Eveliny Rolim', Valor: '90 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Intelectuais', Idade: '41 Anos' },
            { Ajudante: 'Tati Freitas', Valor: '70 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Psicossociais', Idade: '46 Anos' },
            { Ajudante: 'Valesca Santiago', Valor: '100 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Multiplos   (Visuais e Fisicos)', Idade: '42 Anos' },
            { Ajudante: 'Roger Petricio', Valor: '110 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Multiplos   (Intelectuais e Psicossosiais)', Idade: '37 Anos' },
            { Ajudante: 'Helio Valença', Valor: '60 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Auditivos', Idade: '43 Anos' },
            { Ajudante: 'Zito Farias', Valor: '85 por Hora', Disponibilidade: 'XX/XX/XX - XX/XX/X', Especialidade: 'Deficientes Visuais', Idade: '51 Anos' },
          ]}
          renderItem={Lista}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  Containerstyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  Titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 56,
    padding: 20,
  },
  Caixainf: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    marginRight: 10,
  },
  TextoContainer: {
    flex: 1,
  },
  Texto: {
    fontSize: 16,
    color: '#333',
  },
});