import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return(
        <BannerContainer>
        <BannerTitle>Featured Movies</BannerTitle>
        <BannerButton>
            <button>Play</button>
            <button>More</button>
        </BannerButton>
    </BannerContainer>
    ); 
}

const BannerContainer = styled.div`
height:400px;
background-image:url('banner.jpg');
background-size:cover;
color: white;
padding:60px 30px;
display: flex;
flex-direction: column;
justify-content:flex-end;
`;

