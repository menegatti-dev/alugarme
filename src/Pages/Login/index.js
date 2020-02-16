import React, { useState, useEffect } from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity, 
	StatusBar, 
	Image, 
	TextInput
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import logo from '../../Assets/logo.png';
import mail from '../../Assets/mail.png';
import password from '../../Assets/password.png';
import Header from '../../Components/Header';
import api from '../../services/api';



export default function Login({ navigation }) {
	useEffect(() => {
		async function getStorage() {
			let nome = await AsyncStorage.getItem('nome');
			let id = await AsyncStorage.getItem('id');
			if (nome.length > 0 && id.length > 0) {
				navigation.navigate('App');
			}
		}

		getStorage();
	},[]);

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	async function handleLogin() {
		try {
			const response = await api.post('/pessoa/sign', {
				email,
				senha
			});
			const { id, nome } = response.data[0];
			console.log(response.data);

			try {
				await AsyncStorage.setItem('id', id.toString());
				await AsyncStorage.setItem('nome', nome);
				navigation.navigate('App');
			} catch (e) {
				alert('Async Storage');
			}
		} catch (error) {
			console.log(response);
		}

	}
	return(
		<View style={styles.container}>
			<StatusBar backgroundColor="#f27405" barStyle="light-content" />
			<Header page="Login" logo={logo} />
			<View style={styles.body}>
				<View style={styles.inputArea}>
					<Image style={styles.inputImage} source={mail}/>
					<TextInput 
						style={styles.inputText} 
						value={email}
						placeholder={"E-mail"} 
						onChangeText={(text) =>setEmail(text)}
						keyboardType="email-address"
					/>
				</View>
				
				<View style={styles.inputArea}>
					<Image style={styles.inputImage} source={password}/>
					<TextInput 
						style={styles.inputText}
						value={senha}
						placeholder={"Senha"} 
						onChangeText={(text) => setSenha(text)}
						secureTextEntry={true}
					/>
				</View>
				<TouchableOpacity>
					<Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.btnSubmit} onPress={() => handleLogin()}>
					<Text style={styles.btnText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.register}>
					<Text style={styles.registerText}>Não tem uma conta? </Text>
					<Text style={styles.registerLink}>Registre-se</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}