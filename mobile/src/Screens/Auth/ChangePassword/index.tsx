import React from 'react';
import { ImageBackground} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button,Container, ContainerForm, ContainerLogo, Footer} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';

export default function Recover(){


  return (
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1}}>
      <Container>

          <ContainerLogo>
            <Animatable.Image
              animation="flipInY"
              source={require('../../../assets/imgs/logoo.png')}
              style={{ width:'70%', height:400}}
              resizeMode="contain"
            />
          </ContainerLogo>


          <ContainerForm>
              <InputText
                placeholder='Nova Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                // onChangeText={() => {}}
              />
              <InputText
                placeholder='Confirmar Senha'
                font='Imbue-Medium'
                fontSize={28}
                isPassword={true}
                // onChangeText={() => {}}
              />
          </ContainerForm>

          <Footer>
            <Button>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Alterar senha</Text>
            </Button>
          </Footer>
      </Container>
    </ImageBackground>
  );
}

