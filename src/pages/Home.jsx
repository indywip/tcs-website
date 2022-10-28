import React from "react";
import styled from "styled-components";

const Home = () => {
    return (
    <Wrapper>
        <Top>
            <TextIntro>
                <Image2 src={`https://i.imgur.com/ruPYL4L.png`}  />
                <BigText style={{ marginTop: '-120px' }}>We Create, Build, and Design For Your Desires</BigText>
                <Sub>Leverage Canada’s best and brightest students while achieving your business goals</Sub>
                <Button onClick={(e)=> {
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHrryaIVmtKrWSQFctsUZnf_5HZp1hrzXv5uholwMQm2Ws3A/viewform", '_blank')
                }}>Request a Project</Button>
            </TextIntro>
            <ImageIntro>
                <Image src={`https://i.imgur.com/7C4zGr5.png`}  />
            </ImageIntro>
        </Top>
        <About>
            <Blob src={`https://i.imgur.com/FOK5iq6.png`} />
            <Head style={{ marginTop: '-30px' }}>Who Are We?</Head>
            <Text>
                The Creative Solution (TCS) is a design and development studio with a mission to empower students 
                towards impact. <br/><br/> We work with a talented team of student talents to produce good design without 
                compromise, and we’d love to help you take the next step to improve your brand image.<br/><br/>
                Reach out to our team for a consultation and we’ll be there to help in the next 48 hours!
            </Text>
        </About>
        <Work>
            <Image3 src={`https://i.imgur.com/w7eEEk2.png`} />
            <CenterText>
                <Head>Past Work</Head>
                <Text style={{ marginTop: '0px'}}>
                    We offer projects that range from UX/UI designs, logos, NFTs, to presentations and websites.
                </Text>
                <Button>See Past Work</Button>
            </CenterText>
            <Image4 src={`https://i.imgur.com/yoCLLtX.png`} />
        </Work>
        <Us>
            <Head>Why Us?</Head>
            <Items>
                <Item>
                    <Logo src={`https://i.imgur.com/MpaXxsv.png`} />
                    <Header>Variety</Header>
                    <MiniText>Our team is skilled in various fields at top quality</MiniText>
                </Item>
                <Item>
                    <Logo src={`https://i.imgur.com/1dSlPlB.png`} />
                    <Header>Affordability</Header>
                    <MiniText>Cheaper than any high-quality alternatives</MiniText>
                </Item>
                <Item>
                    <Logo src={`https://i.imgur.com/G7kecc9.png`} />
                    <Header>Recruitment</Header>
                    <MiniText>We create a pipeline of future student talents</MiniText>
                </Item>
                <Item>
                    <Logo src={`https://i.imgur.com/4AzU1mA.png`} />
                    <Header>Feedback Loop</Header>
                    <MiniText>We are constantly open to feedback and iteration on designs</MiniText>
                </Item>
                <Item>
                    <Logo src={`https://i.imgur.com/E6LvXO0.png`} />
                    <Header>Value Driven</Header>
                    <MiniText>Only pay the full amount once you are satisfied with our end product</MiniText>
                </Item>
            </Items>
            <Padding>
                <Block>
                    <Head style={{ color: 'white', marginTop: '0px' }}>We are also trusted by:</Head>
                    <Logos>
                        <LongCompany src={`https://i.imgur.com/RGUykeN.png`} />
                        <Company src={`https://i.imgur.com/kjj9B21.png`} />
                        <LongCompany style={{ width: '160px' }} src={`https://i.imgur.com/nvzjtpU.png`} />
                        <Company style={{ width: '68px' }} src={`https://i.imgur.com/DQts4Ck.png`} />
                        <LongCompany style={{ width: '175px' }} src={`https://i.imgur.com/wo4jrGj.png`} />
                        <Company src={`https://i.imgur.com/jaFKWZn.png`} />
                        <LongCompany src={`https://i.imgur.com/UQ7weXL.png`} />
                    </Logos>
                </Block>
            </Padding>
        </Us>
    </Wrapper>
    );
}

export default Home

const Wrapper = styled.div`
    background-color: #FFFFFF;
`

const BigText = styled.h1`
    font-size: 70px;
    font-weight: 300;
    color: white;
`

const Sub = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: white;
    margin-top: -20px;
`

const Top = styled.div`
    background-color: #2C323E;
    display: flex;
    align-items: bottom;
    justify-content: center;
    padding: 30px 40px;
`

const TextIntro = styled.div`
    flex: 45%
`

const ImageIntro = styled.div`
    flex: 55%
`

const Image = styled.img`
    width: 780px;
`

const Blob = styled.img`
    margin-top: -100px;
    margin-left: 250px;
    width: 130px;
`

const Button = styled.button`
    border: none;
    background-color: #E49852;
    color: black;
    font-size: 24px;
    padding: 12px 25px;
    border-radius: 15px;
    margin-top: 12px;
    font-weight: 600;
    cursor: pointer;
`

const Image2 = styled.img`
    width: 300px;
    margin-top: -30px;
    margin-left: -70px;
    overflow: hidden;
`

const About = styled.div`
    background-color: #CFE6F2;
    padding: 35px 85px;
`

const Work = styled.div`
    padding: 0px 85px;
    display: flex;
    align-items: center;
`

const CenterText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Head = styled.h2`
    font-size: 40px;
    font-weight: 600;
    text-align: center;
`

const Header = styled.h3`
    font-size: 30px;
    text-align: center;
    font-weight: 600;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`

const MiniText = styled.p`
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    margin-top: -20px;
`

const Image3 = styled.img`
    width: 400px;
    margin-left: -90px;
    margin-top: -120px;
`

const Image4 = styled.img`
    width: 400px;
    margin-right: -90px;
    margin-top: -90px;
`


const Us = styled.div`
    background-color: #CFE6F2;
    padding: 50px 20px;
`

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.img`
    width: 180px;
`

const Block = styled.div`
    background-color: #7F9BB6;
    padding: 35px 0px;
`

const Logos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const Padding = styled.div`
    padding: 0px 85px;
    margin-top: 20px;
`

const Company = styled.img`
    width: 75px;
`

const LongCompany = styled.img`
    width: 135px;
`