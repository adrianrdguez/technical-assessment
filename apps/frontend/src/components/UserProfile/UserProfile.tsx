import { ContainerDiv, Icon, ContentDiv, Header, Text, ImageDivContainer } from '../../styles/UserProfile.styles';

interface UserProps {
  avatar: string;
  name: string;
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
        <Text>{props.name}</Text>
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
        <Text>{props.inscriptionDate}</Text>
      </ContentDiv>
    </ContainerDiv>
  </div>
);

export default UserProfile;
