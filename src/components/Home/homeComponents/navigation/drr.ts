import styled from "styled-components";

export const NavigationBar = styled.nav`
  height: 15vh;
  
  
  .nav {
    display: flex;
    justify-content: space-between;
    height: 15vh ;
    align-items: center;

    & .image {
      width: 90px;
      height:90px ;
    }
  }
  
  .navigation {
    list-style: none;
    text-decoration: none;
    display: flex;
    gap: 10px;
    height: 100%;
    
    
    align-items: center;

    & a {
      color: black;
      font-size: 20px;
      cursor: pointer;
    } 
  }

`