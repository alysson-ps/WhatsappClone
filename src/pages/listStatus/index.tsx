import React from 'react';
import { Text, } from 'react-native';
import { Container,AddStatus, Plus,Camera, MyStatus, Titulo, SubTitulo, Image, MyStatusContainer} from "./status.css"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Container } from "./status.css";

const Status = () => {
    return(
<<<<<<< HEAD:src/pages/listStatus/index.tsx
        <Container>
            <Text>Status</Text>
=======
        <Container> 
           <MyStatus>
               <Image>
                    <Plus>
                        <Feather name="plus" size={20} color="#FFFAFA" />
                    </Plus>
               </Image>
               <MyStatusContainer>
                   <Titulo>
                        Meu status
                   </Titulo>
                    <SubTitulo>
                        Toque para adicionar seus status
                    </SubTitulo>
               </MyStatusContainer>
           </MyStatus>
             
            <AddStatus>
                <MaterialCommunityIcons name="pencil" size={24} color="#FFFAFA" />
            </AddStatus>
            
            <Camera>
                <MaterialIcons name="camera-alt" size={26} color="#FFFAFA" />
            </Camera>
>>>>>>> d357ba86950659d09dc1f740c6574da96eb3ef53:src/pages/status/index.tsx
        </Container>
    )
}

export default Status;