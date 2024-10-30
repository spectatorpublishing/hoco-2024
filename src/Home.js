import styled from 'styled-components';


import Section from './components/Section';
import StaffCredits from './components/StaffCredits';
import WelcomeHeader from './components/WelcomeHeader';
import homecomingImage from './homecoming.jpg';
import { device } from './device';

const FirstFold = styled.div`
  display: flex;
  margin-top: -3rem;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MainImage = styled.iframe`
  display: none;

  @media ${device.tablet} {
    display: block;
    width: 60%;
    height: 35rem;
  }
`;

const MobileMainImage = styled.img`
  width: 100%;
  height: 20rem;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const Ad = styled.img`
  margin: 0 2rem;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const MobileAd = styled.img`
  margin: 0 2rem;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const Home = () => {
  const sectionNames = ["Sports", "University", "City", "Audio", "Crosswords"];

  return (
    <div>
        <WelcomeHeader
          title="HOMECOMING 2024" 
          imageSrc={homecomingImage}
        />
        {sectionNames.map((sectionName, index) => (
            <Section key={sectionName} sectionName={sectionName} index={index} />
        ))}
        <StaffCredits></StaffCredits>
    </div>
  );
}

export default Home;
