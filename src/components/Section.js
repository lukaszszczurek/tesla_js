import React from 'react';
import styled from "styled-components";

function Section({title,description,leftButtonText,rightButtonText,modelImage}) {
    return (
        <Wrap bgImg={modelImage}>
           <ItemText>

               <h1>{title}</h1>
               <p>{description}</p>
           </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftButtonText}
                </LeftButton>

                <RightButton>

                    {rightButtonText}
                </RightButton>

            </ButtonGroup>
              <Arrow>
                <DownArrow src='/images/down-arrow.svg'/>
              </Arrow>

            </Buttons>






        </Wrap>

    );
}

const Wrap=styled.div`
    width: 100vw;
    height: 100vw;
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
   background-image: ${props => `url("/images/${props.bgImg}")`};
  
  //background-image:url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; //horizontal

`;

const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;
    
    
`;

const ButtonGroup=styled.div`
  
  @media (max-width: 768px){
    flex-direction: column;
  }
    display: flex;
  margin-bottom: 30px;
  
`;

const  LeftButton=styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width:256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor:pointer;
  margin: 8px;
  
  


`;

const RightButton=styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;

`;


const DownArrow=styled.img`

    margin-top: 10px;
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x:hidden;
    
    
  
`;


const Buttons=styled.div`
    
    justify-content: center;
`;

const Arrow=styled.div`
  justify-content: center;
  display: flex;
    
    `;



export default Section;