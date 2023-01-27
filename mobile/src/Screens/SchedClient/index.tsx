import DateTimePicker from 'react-native-modal-datetime-picker';
import { useState } from 'react';
import { Image, ImageBackground } from "react-native";
import Button from "../../components/Button";
import HeaderComponent from "../../components/HeaderComponent";
import { Text } from "../../utils/Text";
import { Header, HairdInfo, ProfileImage, HairdData, DaysWeek, ButtonToSched, Schedules, Day, Container,PickHour, HourInput,MinuteInput } from "./style";

export default function SchedClient(){


  const [date, setDate] = useState(new Date());
  const [isClocVisible, setIsClockVisible] = useState(false);

  // MANIPULATE DATAPICKER
  const openDatePicker = () => {
    setIsClockVisible(!isClocVisible);

  };

  function setSched (date:any){
    setIsClockVisible(!isClocVisible);
    setDate(date)
  }
  // MANIPULATE DATAPICKER
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

      <Container>
        <Header>
          <HeaderComponent />
        </Header>

        <HairdInfo>
          <ProfileImage>
            <Image source={require('../../assets/imgs/defaultImage.png')} style={{width:150, height:160}}/>
          </ProfileImage>

          <HairdData>
            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Nome:</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Washington Ferreira</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Endereço: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>Rua Dorgival pinheiro de sousa - nº 2240</Text>

            <Text size={14} font={'Poppins'} weight={'Bold'}    color={'#F6C33E'}>Preços: </Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>R$ 25,00 Cabelo</Text>
            <Text size={14} font={'Poppins'} weight={'Regular'} color={'#fff'}>R$ 20,00 Barba</Text>
          </HairdData>
        </HairdInfo>

        <DaysWeek>
          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEG</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>TER</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUA</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>QUI</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SEX</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>SAB</Text>
          </Day>

          <Day style={{backgroundColor: 'white'}}>
            <Text size={14} font={'Poppins'} weight={'Bold'} color={'black'}>DOM</Text>
          </Day>
        </DaysWeek>

        <Schedules >


            <DateTimePicker
              mode="time"
              isVisible={isClocVisible}
              onConfirm={(date)=>setSched(date)}
              onCancel={()=>setIsClockVisible(!isClocVisible)}
            />

            <Text size={14} font={'Poppins'} weight={'Bold'} color={'white'}>Marcar horários disponiveis</Text>
          <PickHour onPress={openDatePicker}>
            <HourInput>
               <Text size={30} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getHours().toLocaleString().padStart(2, '0')}</Text>
            </HourInput>
            <Text size={30} font={'Poppins'} weight={'Bold'} color={'white'}>:</Text>
            <MinuteInput>
               <Text size={30} font={'Poppins'} weight={'Bold'} color={'black'}>{date.getMinutes().toLocaleString().padStart(2, '0')}</Text>
            </MinuteInput>
          </PickHour>


        </Schedules>

        <ButtonToSched>
          <Button
            name='Marcar Horário'
            backColor="#5A5A5A"
            size={22}
            width={150}
            height={90}
          />
        </ButtonToSched>

      </Container>

    </ImageBackground>
  );

}
