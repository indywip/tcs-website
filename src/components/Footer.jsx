import React from "react";
import styled from "styled-components";

import logo from '../img/logo.png'

const Footer = () => {
    return (
        <Wrapper>
            <Top>
                <Left>
                    <Logo src={logo} />
                    <LogoText>THE <br/>CREATIVE <br/>SOLUTION</LogoText>
                </Left>
                <Items>
                <Item>
                    <Header>Products</Header>
                    <Sub>Request Project</Sub>
                    <Sub>Past Work</Sub>
                </Item>
                <Item>
                    <Header>Company</Header>
                    <Sub>About Us</Sub>
                    <Sub>FAQ</Sub>
                    <Sub>Join Our Team</Sub>
                </Item>
                <Item>
                    <Header>Contact Us</Header>
                    <Sub><A href="mailto:afoatubc@gmail.com"> afoatubc@gmail.com</A></Sub>
                </Item>
                <Item style={{ marginLeft: '50px'}}>
                    <Header>Follow Us</Header>
                    <Socials>
                        <Icon src={`https://i.imgur.com/VAftTZu.png`} />
                        <SocialText>LinkedIn</SocialText>
                    </Socials>
                    <Socials>
                        <Icon src={`https://i.imgur.com/IB8muOA.png`} />
                        <SocialText>Instagram</SocialText>
                    </Socials>
                    <Socials>
                        <Twit src={`https://i.imgur.com/x96KACW.png`} />
                        <SocialText>Twitter</SocialText>
                    </Socials>
                    <Socials>
                        <Icon src={`https://i.imgur.com/cm3nG1O.png`} />
                        <SocialText>TikTok</SocialText>
                    </Socials>
                </Item>
            </Items>
            </Top>
            <Hr />
            <Text>Copyright © 2022 TCS  |  All Rights Reserved </Text>
            <Blobby>
            <Blob src={`https://i.imgur.com/xilMfMZ.png`} />
            </Blobby>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    padding: 20px 30px;
    padding-top: 30px;
`

const Top = styled.div`
    display: flex;
    gap: 60px;
    align-items: top;
    margin-bottom: 30px; 
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
`

const LogoText = styled.h1`
    font-size: 32px;
    font-weight: 700;
`

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const Header = styled.p`
    font-size: 19px;
    font-weight: 600;
`

const Sub = styled.p`
    font-size: 19px;
    font-weight: 400;
    color: #95989E;
    margin-top: 5px;
`

const SocialText = styled.p`
    font-size: 19px;
    font-weight: 400;
    color: black;
`

const A = styled.a`
    text-decoration: none;
    color: #95989E;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #95989E;
`

const Hr = styled.hr``

const Item = styled.div`
    display: flex;
    flex-direction: column;
`

const Blob = styled.img`
    width: 400px;
    position: absolute;
    margin-right: 0px;
`

const Blobby = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: -50px;
    margin-top: -220px;
`

const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: -14px;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
`

const Twit = styled.img`
width: 20px;
height: 16px;
`
