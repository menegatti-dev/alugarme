import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Image,
  Picker,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

import logo from '../../Assets/logo.png';
import styles from './styles';
import api from '../../services/api';


export default function Register({ navigation }) {
	
	useEffect(() => {
		listarBancos();
	},[]);

	async function handleCadastrar() {
	
		if(
			dados.documento.length != 11 &&
			dados.documento.length != 14
		){

			Alert.alert("Erro", "Tamanho do documento é inválido.")
			return ;
		}

		if(dados.email.length == 0){

			return Alert.alert("Erro", "Informe o email corretamente");

		}

		if(dados.senha.length == 0){

			return Alert.alert("Erro", "Informe a senha corretamente");

		}

		if(dados.bank_code == '0' || dados.bank_code === 0){

			return Alert.alert("Erro", "Informe corretamente o banco");
		}

		if(dados.type == '0' || dados.type == 0){

			return Alert.alert("Erro", "Informe corretamente o tipo de conta");
		}

		setDados({
			...dados, 
			tipo: ((dados.documento.length == 11) ? 'f': 'j'),
			document_number: dados.documento,
		});

		await api.post('/pessoa/signup', dados).then((response) => {
			Alert.alert('Atenção', response.data.message);
			navigation.navigate('Login');
		}).catch((err)=>{
			Alert.alert('Erro', err.response.data.message);
		});
	}

	async function listarBancos(){
		await api.get('/banco').then((response)=>{
			setBanks(response.data);
		}).catch(()=>{});
	}
	const [banks, setBanks] = useState([]);
	const [dados, setDados] = useState({
		tipo: 'f',
		nome: '',
		documento: '',
		email: '',
		senha: '',
		bank_code: '0',
		agencia: '',
		agencia_dv: '',
		conta: '',
		type: '0',
		conta_dv: '',
		document_number: '',
		legal_name: ''

	});

	function navigateLogin(){
		navigation.navigate('Login');
	}

  	return(
		<ScrollView style={{flex: 1, height: 100}}>
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<StatusBar backgroundColor="#f27405" barStyle="light-content" />
				<View style={styles.header}>
					<Image source={logo} resizeMode="contain" style={styles.logo} />
				</View>
				<View style={styles.body}>
				<TextInput 
						style={styles.inputText} 
						value={dados.nome}
						placeholder={"Nome"} 
						onChangeText={(text) =>setDados({ ...dados, nome: text })}
						keyboardType="default"
					/>
					<TextInput 
						style={styles.inputText} 
						value={dados.documento}
						placeholder={"CPF/CNPJ (somente numeros)"} 
						onChangeText={(text) =>setDados({ ...dados, documento: text })}
						keyboardType="numeric"
					/>
					<TextInput 
						style={styles.inputText} 
						value={dados.email}
						placeholder={"E-mail"} 
						onChangeText={(text) =>setDados({ ...dados, email: text })}
						keyboardType="email-address"
					/>
					<TextInput 
						style={styles.inputText} 
						value={dados.senha}
						placeholder={"Senha"} 
						secureTextEntry={true}
						onChangeText={(text) =>setDados({ ...dados, senha: text })}
						keyboardType="default"
					/>
					<Text style={styles.title}>Dados Bancarios(para recebimento)</Text>
					<View style={styles.Picker}>
						<Picker 
							selectedValue={dados.bank_code}
							onValueChange={(value) => setDados({...dados, bank_code: value})}
						>
							<Picker.Item label="SELECIONE UMA OPÇÃO" value='0' />
							
							{banks.map((item) =>{
								return(<Picker.Item label={item.banco} key={item.cod} value={item.cod} />);
							})}
						</Picker>
					</View>
					<View style={styles.inputGroup}>
						
						<TextInput 
							style={styles.input} 
							value={dados.agencia}
							placeholder={"Agencia"} 
							onChangeText={(text) =>setDados({ ...dados, agencia: text })}
							keyboardType="default"
						/>
						<TextInput 
							style={styles.input} 
							value={dados.agencia_dv}
							placeholder={"Digito Verificador"} 
							onChangeText={(text) =>setDados({ ...dados, agencia_dv: text })}
							keyboardType="default"
						/>
					</View>
					<View style={styles.inputGroup}>
						<TextInput 
							style={styles.input} 
							value={dados.conta}
							placeholder={"Conta"} 
							onChangeText={(text) =>setDados({ ...dados, conta: text })}
							keyboardType="default"
						/>
						<TextInput 
							style={styles.input} 
							value={dados.conta_dv}
							placeholder={"Digito Verificador"} 
							onChangeText={(text) =>setDados({ ...dados, conta_dv: text })}
							keyboardType="default"
						/>
					</View>
					<View style={styles.Picker}>
						<Picker 
							selectedValue={dados.type}
							onValueChange={(value) => setDados({...dados, type: value})}
						>
							<Picker.Item label="SELECIONE UMA OPÇÃO" value='0' />
							<Picker.Item label="CONTA CORRENTE" value='conta_corrente' />
							<Picker.Item label="CONTA POUPANÇA" value='conta_poupanca'/>
						</Picker>
					</View>
					<TextInput 
						style={styles.inputText} 
						value={dados.legal_name}
						placeholder={"Nome escrito na cartão credito/debito"} 
						onChangeText={(text) =>setDados({ ...dados, legal_name: text })}
						keyboardType="default"
					/>
					<TouchableOpacity style={styles.btn} onPress={() => handleCadastrar()}>
						<Text style={styles.btnText}>CADASTRAR</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.login} onPress={() => navigateLogin()}>
						<Text style={styles.registerText}>Ja possui uma conta? </Text>
						<Text style={styles.registerLink}>Faça Login</Text>
				</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}