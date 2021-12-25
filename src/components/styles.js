import styled from 'styled-components';

//console.log(styled, typeof styled);

//styledd components
/*
//first way

export const MainDiv = styled.div `
    max-width: 400px;
    width: 90%;
    padding: 20px; 
    margin: 2rem auto;  
  `; 

export const Button = styled.button `
    background-color: ${props => props.isOn ? '#000':'#bbb'};
    color: white;
    border-radius: 10px;
    display: block;
    outline: none;
    border: none;
    width: 100%;
    height: 64px;
  `;

export const Textarea = styled.textarea `
  width: 100%;
  min-height: 100px;
  margin: 0 0 1rem 0;
  border: none;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  `;

export const List = styled.ul `
    list-style: none;
    width: 100%;
    margin: 0.6rem 0;    
`;

export const ListItem = styled.li `
    padding: 15px 10px;
    background-color: rgba(255, 255, 255, .1);
    border: none;
    border-radius: none;
    color: white;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

*/


/*second way */
export const MainDiv = styled.div `
    max-width: 400px;
    width: 90%;
    padding: 20px; 
    margin: 2rem auto;  
  
    img{
      display: block;
      max-width: 300px;
      width: 90%;
      height: auto;
    }

    textarea{
      width: 100%;
      min-height: 100px;
      margin: 0 0 1rem 0;
      border: none;
      outline: none;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
    }

    ul{
      list-style: none;
      width: 100%;
      margin: 0.6rem 0; 
    }

    ul li{
      padding: 15px 10px;
      background-color: rgba(255, 255, 255, .1);
      border: none;
      border-radius: none;
      color: white;
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }`;
    
export const Button = styled.button `
  background-color: ${props => props.isOn ? '#000':'#bbb'};
  color: white;
  border-radius: 10px;
  display: block;
  outline: none;
  border: none;
  width: 100%;
  height: 64px;
`;