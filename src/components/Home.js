import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home(props) {
    return (
        <Container>
           <Section
           title="Model 3"
           description="Order Online for Touch delivery"
           leftButtonText="Custom Order"
           rightButtonText=" Existing Inventory"
           modelImage="model-3.jpg"



           />
            <Section

                title="Model Y"
                description="Order Online for Touch delivery"
                leftButtonText="Custom Order"
                rightButtonText=" Existing Inventory"
                modelImage="model-y.jpg"

            />


            <Section

                title="Model S"
                description="Order Online for Touch delivery"
                leftButtonText="Custom Order"
                rightButtonText=" Existing Inventory"
                modelImage="model-s.jpg"

            />


            <Section
                title="Model X"
                description="Order Online for Touch delivery"
                leftButtonText="Custom Order"
                rightButtonText=" Existing Inventory"
                modelImage="model-x.jpg"

            />


            <Section
                title="Solar Panels "
                description="Lowest Cost Solar Panels in America"
                leftButtonText="Custom Order"
                rightButtonText=" learn more"
                modelImage="solar-panel.jpg"

            />


            <Section
                title="Solar Roof "
                description="Lowest Cost Solar Panels in America"
                leftButtonText="Custom Order"
                rightButtonText=" learn more"
                modelImage="solar-roof.jpg"

            />
            <Section
                title="Accessories "
                description=""
                leftButtonText="Custom Order"

                modelImage="accessories.jpg"

            />
        </Container>
    );
}

const Container=styled.div`
    height: 100vh;
    

`;



export default Home;