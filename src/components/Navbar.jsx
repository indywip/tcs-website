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
            <Link to="/" style={{ textDecoration: "none", color: "black" }}><Button>Home</Button></Link>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}><Button>About Us</Button></Link>
            <Button>Past Work</Button>
            <Button>FAQ</Button>
            <Request>Request Designs</Request>
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
`
