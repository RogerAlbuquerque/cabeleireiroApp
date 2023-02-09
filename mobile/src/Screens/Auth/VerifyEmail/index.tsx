import React, { useContext, useState } from 'react';
import { ActivityIndicator, ImageBackground} from 'react-native';
import emailValidator from "email-validator";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '../../../utils/Text';
import { Button, Container, ContainerForm, ContainerLogo, Footer,  ForgotDad} from './style';
import InputText from '../../../components/UtilsComponents/InputText';
import * as Animatable from 'react-native-animatable';
import { api } from '../../../utils/api';
import { UserInfoContext } from '../../../context';

export default function VerifyEmail(){

  const [email, setEmail] = useState('');
  const [isAwaitingReponse,setIsAwaitingReponse]=useState(false);
  const{handleAlertModal}=useContext(UserInfoContext)

    async function verifyEmail(){
      console.log(email)

    if(email == '' || !emailValidator.validate(email)){
      return handleAlertModal('Email vazio ou inválido', 'Indique um email válido que ira receber o link para alterar a senha!', 'error')
    }

      try{
        setIsAwaitingReponse(true)
        await api.post('/verifyEmail',{email})
        return handleAlertModal('Mensagem enviada com sucesso', 'Verifique a caixa de entrada do seu email, e clique no link com seu código de recuperação de senha', 'success')
      }
      catch(error){
        console.log(error)
        return handleAlertModal('Erro: talvez esse email não tenha sido cadastrado', 'Verifique se o email está correto, e tente de novo', 'error')
      }
      finally{
        setIsAwaitingReponse(false)
      }
    }

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
                placeholder='E-mail'
                font='Imbue-Medium'
                fontSize={28}
                width={'80%'}
                height= {40}
                onChange={(value) => {setEmail(value)}}
              />
          </ContainerForm>
          <ForgotDad style={{marginTop:-20}}>
            <Text size={12} font={'Imbue'} weight={'Medium'} color={'red'}>
              Será enviado um link nesse email para alterar sua senha!
            </Text>
          </ForgotDad>

          <Footer>
            {!isAwaitingReponse ?
            <Button onPress={verifyEmail}>
              <Text size={45} font={'Imbue'} weight={'Medium'} color={'#F6C33E'}>Recuperar senha</Text>
            </Button>
            :
            <ActivityIndicator color="#fff" size="large"/>}
          </Footer>
      </Container>
    </ImageBackground>
  );
}

