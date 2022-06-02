import React, { useContext } from 'react';
import { useQuery } from '../hooks/useQuery';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';

import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    const query = useQuery();

    return (
        <Container>
            <Header username={query.get('username')} />

            <UserContainer>
                {ctx.userData?.icon ?
                    <React.Fragment>
                        <UserPicture url={ctx.userData?.ip} />
                        <UserDetails name={ctx.userData?.ip} username={ctx.userData?.hostname} bio={ctx.userData?.bio} />
                      
                    </React.Fragment>
                : undefined }
            </UserContainer>
        </Container>
    );
}