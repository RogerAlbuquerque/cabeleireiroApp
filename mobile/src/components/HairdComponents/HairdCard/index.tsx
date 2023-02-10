import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text } from "../../../utils/Text";
import { Container, HairdImage, HairdName, Info, ProfileImage,CloseButton,InfosText } from "./style";

interface HairdCardProps{
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
  hairdName:string,
  workingTimeOpen:any
  workingTimeClose:any
  hairPrice:any
  beardPrice:any
}
export default function HairdCard({hairdName, workingTimeOpen,workingTimeClose,hairPrice, beardPrice,status}:HairdCardProps){

  const [colorCard, setColorCard] = useState ('');
  const [lineOfColorCard, setLineOfColorCard] = useState ('');

useEffect(()=>{
  if(status == 'CONFIRMED'){
    setColorCard ('background-color: rgba(63, 193, 0 ,0.3)')
    setLineOfColorCard('#3FC500');
  }else if(status == 'PENDING'){
    setColorCard ('background-color: rgba(246, 195, 62 ,0.3)') ;
    setLineOfColorCard('#F6C33E')
  }else{
    setColorCard ('background-color:  rgba(0, 0, 0 ,0.4)') ;
    setLineOfColorCard('white')
  }
},[status])



  return(
    <Container style={{backgroundColor:colorCard}}>
       <CloseButton >
          <Text size={20} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
        </CloseButton>
      <HairdImage>
        <ProfileImage style={{justifyContent:'center'}} >
          <Image source={require('../../../assets/imgs/defaultImage.png')} style={{width:70, height:80}}/>
        </ProfileImage>
      </HairdImage>

      <HairdName style={{backgroundColor:lineOfColorCard}}>
        <Text size={12} font={'Poppins'} weight={'Bold'} color={'black'}>{hairdName}</Text>
      </HairdName>

      {
        status == 'PENDING'?

          <Info>
            <InfosText style={{flexDirection:'column', alignItems:'center'}}>
              <Text size={11} font={'Poppins'} weight={'Bold'} color={'white'}>Esperando confirmação </Text>
              <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>{workingTimeOpen.hour}</Text>
            </InfosText>
          </Info>
          :
        status == 'CONFIRMED' ?

        <Info>
          <InfosText style={{flexDirection:'column', alignItems:'center'}}>
            <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Horário confirmado: </Text>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'white'}>12:00</Text>
          </InfosText>
        </Info>

        :
          <Info>
            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Aberto: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>12:00 as 18:00</Text>
            </InfosText>

            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Cabelo: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>R${hairPrice}</Text>
            </InfosText>

            <InfosText>
              <Text size={12} font={'Poppins'} weight={'Bold'} color={'white'}>Barba: </Text>
              <Text size={12} font={'Poppins'} weight={'Regular'} color={'white'}>R${beardPrice}</Text>
            </InfosText>
          </Info>
      }

    </Container>
  );
}


  //  background-color: rgba(0, 0, 0 ,0.4);
  //  background-color: rgba(246, 195, 62 ,0.3);
  //  background-color: rgba(63, 193, 0 ,0.3);
  //  background-color: #F6C33E ;3FC500
