import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
    return (
      <Container>
          <a>
              <img src="/images/logo.svg" alt=""/>


          </a>

          <Menu>
              <a href="#">Model S</a>
              <a href="#">Model 3</a>
              <a href="#">Model X</a>
              <a href="#">Model Y</a>

          </Menu>

          <RightMenu>
              <a href="#">shop</a>
              <a href="#">tesla account</a>
            <CustomMenu/>
          </RightMenu>

          <BurgerNav>
              <CloseWrapper>
                  <CloseMenu/>
              </CloseWrapper>


              
              <li><a href="#"> Existing inventory </a> </li>
              <li><a href="#"> Used inventory </a> </li>
              <li><a href="#"> Trade-in </a> </li>
              <li><a href="#"> Test-Drive </a> </li>
              <li><a href="#"> Insurance </a> </li>
              <li><a href="#"> Cybertruck </a> </li>
              <li><a href="#"> Roadster </a> </li>

          </BurgerNav>

      </Container>
    );
}

    const Container=styled.div`
        
            min-height: 60px;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            top: 0;
            left: 0;
            right: 0;
          z-index: 1;
    
    
        
    `;

    const Menu=styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        a{
          font-weight: 600;
          text-transform: uppercase;
          padding: 0 10px;
          flex-wrap: nowrap;
          
          
        }
    
      @media(max-width: 768px){
        display: none;
      }
    
    
    
    `;

    const RightMenu=styled.div`
      display: flex;
      align-items: center;
    
      a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
      }
     
    `;


    const CustomMenu=styled(MenuIcon)`
        cursor:pointer;
    
    `;

    const BurgerNav=styled.div`
      
        position: fixed;
        
        top: 0;
        right: 0;
        bottom: 0;
      
        background: white;
        width: 200px;
        z-index: 16;
        list-style: none;
        padding:20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align:start;
      
      li{
        
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
        
        a{
          font-weight: 600;
        }
      
        
        
      }
    `;


    const CloseMenu=styled(CloseIcon)`
        cursor: pointer;
   
    `;

    const CloseWrapper=styled.div`
          position: fixed;
          justify-content:flex-end;
          padding-left: 150px;
    
    `;

export default Header;