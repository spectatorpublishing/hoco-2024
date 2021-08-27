import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #E0E2DC;
    display: flex;
    padding: 2rem;
    margin: 3rem;
    height: fit-content;
    border-radius: 5px;

    a {
        text-decoration: none;
    }

    @media (max-width: 425px) {
        margin-right: 0rem;
        flex-direction: column;
    }
`;

const BigWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Ad = styled.img`
  margin: 0 2rem;
`;

const Paragraph = styled.div`
    font-family: 'Amiko', sans-serif;
    width: 80%;
    font-size: 0.875rem;

    a {
        color: black;
    }

    @media (max-width: 425px) {
        width: fit-content;
        margin-top: 10px;
    }
`;

const ClubsButton = styled.div`
    background: #D37462;
    padding: 0.7rem;
    margin-left: 2rem;
    border-radius: 5px;
    color: #FFFFFF;
    white-space: nowrap;
    width: fit-content;
    height: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    align-self: center;
    box-sizing: border-box;
`;

const ExploreClubs = () => {
    return (
        <BigWrap>
            <Wrapper>
                <Paragraph>
                Have a hobby? Want to continue pursuing a passion? Looking for 
                a specific group or activity? We have you covered! Find clubs 
                and student organizations that interest you through LionClubs, 
                Spectator’s newest platform created by our own product and 
                engineering teams.
                </Paragraph>
                <a href="http://www.lionclubs.info">
                    <ClubsButton>Visit LionClubs</ClubsButton>
                </a>
            </Wrapper>
            <a href="https://www.happyhothunanny.com/">
                <Ad src="https://cds-static-hosting.s3.amazonaws.com/hunan-ad.png" />
            </a>
        </BigWrap>
    )
};

export default ExploreClubs;