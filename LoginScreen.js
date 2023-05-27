import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (e.g., API call to validate credentials)
    // On successful login, navigate to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
