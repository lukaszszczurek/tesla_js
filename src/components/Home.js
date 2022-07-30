import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home(props) {
    return (
        <Container>
           <Section
           title="Model S"
           description="Order Online for Touch delivery"
           leftButtonText="Custom Order"
           rightButtonText=" Existing Inventory"
           modelImage="/images/model-s.jpg"



           />
        </Container>
    );
}

const Container=styled.div`
    height: 100vh;
    

`;



export default Home;