import react from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <Top>
                <BigText>ABOUT US</BigText>
            </Top>
            <Con1><Image1 src={`https://i.imgur.com/7ZiiMDG.png`} /></Con1>
            <AboutUs>
                <Head>How We Started</Head>
                <Text>
                Originally The Creative Solution (TCS) was founded in December 2021 as Art for Others with the intention to 
                support those impacted by Typhoon Cebu. <br/><br/>
                Following a successful NFT campaign, our team realized that student talent is heavily underemployed, especially 
                in and amongst international students. <br/><br/>
                Ever since, we’ve grown from only offering design services to also adding development, product management 
                and copywriting skills to our student roster.
                </Text>
            </AboutUs>
            <Image2 src={`https://i.imgur.com/fCEjjEe.png`} />
            <Team>
                <Head>Meet Our Team</Head>
                <Text>Get to know the people behind the creative solutions!</Text>
                <People>
                    <Person>
                        <Icon src={`https://i.imgur.com/nHMYmR1.png`} />
                        <Name>Aayush</Name>
                        <Sub>Project Coordinator</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/nUscAp3.png`} />
                        <Name>Nyan</Name>
                        <Sub>Backend Developer</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/iVL5Dlq.png`} />
                        <Name>Indy</Name>
                        <Sub>Frontend Developer</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/2rbD0Uc.png`} />
                        <Name>Rora</Name>
                        <Sub>Designer</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/YYhsAjc.png`} />
                        <Name>Khammy (Kate)</Name>
                        <Sub>Designer</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/5ZOnVgo.png`} />
                        <Name>Eisha</Name>
                        <Sub>Designer</Sub>
                    </Person>
                    <Person>
                        <Icon src={`https://i.imgur.com/jHlGLe5.png`} />
                        <Name>Clarissa</Name>
                        <Sub>Designer</Sub>
                    </Person>
                </People>
            </Team>
            <Join>
                <Head>Join Us Today!</Head>
                <Text>Interested in designing or developing with us? Apply to join our team today!</Text>
                <Blobs>
                    <ImageGroup>
                        <Image3 src={`https://i.imgur.com/iRTQXe5.png`} />
                        <Image4 src={`https://i.imgur.com/Ixg1K4Q.png`} />
                    </ImageGroup>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeE7Xk_vLngcrX4BUyIOBKMszVK50rqhQk6p9b9wyB5xIgNWQ/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    <ImageGroup2>
                        <Image5 src={`https://i.imgur.com/7FRHUSH.png`} />
                        <Image6 src={`https://i.imgur.com/yLFhlSJ.png`} />
                    </ImageGroup2>
                </Blobs>
            </Join>
        </Wrapper>
    )
}

export default About

const Wrapper = styled.div``

const Join = styled.div`
    padding: 35px 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.h2`
    font-size: 28px;
    font-weight: 500;
    text-align: center;
`

const Sub = styled.h3`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-top: -20px;
`

const Desc = styled.p`
`

const Icon = styled.img`
    width: 200px;
`

const People = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin-top: 60px;
`

const Con1 = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Image1 = styled.img`
    margin-top: -210px;
    width: 400px;
`

const Image2 = styled.img`
    margin-top: -400px; 
    width: 350px;
`

const Blobs = styled.div`
    display: flex;
    justify-content: space-between;
    //grid-template-columns: repeat(3, 1fr);
`

const ImageGroup = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageGroup2 = styled.div`
    display: flex;
    flex-direction: column;
`


const Image3 = styled.img`
    width: 250px;
    margin-top: -100px;
`

const Image4 = styled.img`
    width: 400px;
    margin-top: 140px;
`

const Image5 = styled.img`
    width: 350px;
`

const Image6 = styled.img`
    width: 350px;
    margin-top: 126px;
`




const Top = styled.div`
    background-color: #2C323E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0px;
`

const BigText = styled.h1`
    font-size: 70px;
    font-weight: 300;
    color: white;
    text-align: center;
`

const AboutUs = styled.div`
    padding: 35px 190px;
    margin-top: -140px;
`

const Team = styled.div`
    padding: 35px 85px;
    background-color: #CFE6F2;
    margin-top: -160px;
`

const Head = styled.h2`
    font-size: 40px;
    font-weight: 600;
    text-align: center;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-top: -20px;
`
