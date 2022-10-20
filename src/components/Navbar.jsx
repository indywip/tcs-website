import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../img/logowhite.png"

const Navbar = () => {
    return (
    <Wrapper>
       <Logo>
            <Icon src={logo} alt="logo" />
            <Text>The Creative Solution</Text>
        </Logo>
        <Buttons>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}><Button>Home</Button></Link>
            <Link to="/about" style={{ textDecoration: "none", color: "white" }}><Button>About Us</Button></Link>
            <Button onClick={(e)=> {
                window.open("https://drive.google.com/drive/folders/1Bvtpqf4fcOXICxNhPvOLwL32RR4eAfM2", "_blank")
            }}>Past Work</Button>
            <Button>FAQ</Button>
            <Request onClick={(e)=> {
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHrryaIVmtKrWSQFctsUZnf_5HZp1hrzXv5uholwMQm2Ws3A/viewform", '_blank')
            }}>Request Designs</Request>
        </Buttons> 
    </Wrapper>
    );
}

export default Navbar

const Wrapper = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Buttons = styled.div`
    display: flex;  
    gap: 30px;
`

const Icon = styled.img`
    width: 45px;
    height: 45px;
`

const Text = styled.h1`
    font-size: 24px;
    color: white;
    font-weight: 400;
`

const Button = styled.h2`
    font-size: 18px;
    font-weight: 400;
`

const Request = styled.button`
    border: none;
    background-color: #E49852;
    color: black;
    font-size: 18px;
    padding: 0px 18px;
    border-radius: 10px;
    font-weight: 600;
    margin-left: 12px;
    cursor: pointer;
`
