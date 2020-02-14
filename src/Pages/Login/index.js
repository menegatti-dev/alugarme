import React from 'react';
import { View, Text, TouchableOpacity, StatusBar} from "react-native";

import styles from './styles';
import logo from '../../Assets/logo.png';
import mail from '../../Assets/mail.png';
import password from '../../Assets/password.png';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';

export default function Login() {
	return(
		<View style={styles.container}>
			<StatusBar backgroundColor="#f27405" barStyle="light-content" />
			<Header page="Login" logo={logo} />
			<View style={styles.body}>
				
				<InputText description="Email" img={mail} />
				<InputText description="Senha" img={password} />
				<TouchableOpacity>
					<Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.btnSubmit}>
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





