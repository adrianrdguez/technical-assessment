import { ContainerDiv, Icon, ContentDiv, Header, Text, ImageDivContainer } from './UserProfile.styles';
import { format } from 'date-fns';

interface UserProps {
  avatar?: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: string;
  icon?: '';
}

const UserProfile: React.FC<UserProps> = (props) => (
  <div>
    <ImageDivContainer>
      <img src={props.avatar} alt={props.name} />
    </ImageDivContainer>
    <ContainerDiv>
      <Icon>
        {props.icon ? <img src={props.icon} alt="" /> : null}
      </Icon>
      <ContentDiv>
        <Header>Nombre y Apellidos</Header>
        <Text>{props.name} {props.lastName}</Text>
      </ContentDiv>
    </ContainerDiv>
    <ContainerDiv>
      <Icon>
        {props.icon ? <img src={props.icon} alt="" /> : null}
      </Icon>
      <ContentDiv>
        <Header>Nombre de Usuario</Header>
        <Text>{props.username}</Text>
      </ContentDiv>
    </ContainerDiv>
    <ContainerDiv>
      <Icon>
        {props.icon ? <img src={props.icon} alt="" /> : null}
      </Icon>
      <ContentDiv>
        <Header>Email</Header>
        <Text>{props.email}</Text>
      </ContentDiv>
    </ContainerDiv>
    <ContainerDiv>
      <Icon>
        {props.icon ? <img src={props.icon} alt="" /> : null}
      </Icon>
      <ContentDiv>
        <Header>Teléfono</Header>
        <Text>{props.phone}</Text>
      </ContentDiv>
    </ContainerDiv>
    <ContainerDiv>
      <Icon>
        {props.icon ? <img src={props.icon} alt="" /> : null}
      </Icon>
      <ContentDiv>
        <Header>Fecha de Inscripción</Header>
        <Text>{format(new Date(props.inscriptionDate), 'dd/MM/yyyy')}</Text>
      </ContentDiv>
    </ContainerDiv>
  </div>
);

export default UserProfile;
