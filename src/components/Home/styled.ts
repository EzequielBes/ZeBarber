import styled from "styled-components";
import Image from 'next/image'


export const Container = styled.header`
  height: 100vh;
  overflow: hidden;
  .headerContainer {
    height: 100%;
  }
  .imageContainer {
    height: 100%;
  }


  .image {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    
    
  }
  
  .wellcome {
    
    position: absolute;
    display: flex;
    
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    width: 100%;

    top: 0;
    
    color: #F5DEB3;

  }

  .queroMarcar {
    cursor: pointer;
    font-size: 1.2rem;
    background-color: #D2691E;
    padding: 15px;
    border-radius: 15px;
    transition: all ease 0.2s;
  
    &:hover {
    background-color: #CD853F;
    color: #FFF8DC
  }
  }

`



