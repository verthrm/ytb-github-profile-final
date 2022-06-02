import {
    Container,
    Name,
    Username,
    Description
} from './styles';

const UserDetails = props => {
    return (
        <Container>
            <Name>{props?.ip}</Name>
            <Username>{props?.ip}</Username>
            <Description>{props?.ip}</Description>
        </Container>
    );
}

export default UserDetails;