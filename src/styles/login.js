import styled from 'styled-components'

const LoginButton = styled.button`
  background-color: #49ABDF;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #ffffff;
  width: 80%;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 12px;
`

const LoginCard = styled.div`
    border: solid 1px #6C6565aa;
    height: 600px;
    width: 340px;
    border-radius: 4px;
    -webkit-box-shadow: 14px 27px 26px -30px rgba(108,101,101,1);
    -moz-box-shadow: 14px 27px 26px -30px rgba(108,101,101,1);
    box-shadow: 14px 27px 26px -30px rgba(108,101,101,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextField = styled.input`
    background: #F2EFEF;
    border: none;
    padding-top: 16px;
    padding-bottom: 16px;
    color: #242424;
    font-size: 18px;
    text-align: center;
    width: 79%;
    border-radius: 2px;
    margin-bottom: 24px;
`

const Label = styled.label`
    color: #575050;
    font-size: 18px;
    text-transform: capitalize;
    align-self: start;
    margin-left: 10%;
    margin-bottom: 6px;
    font-family: "ABeeZee", serif;
`

const SubTitle = styled.p`
    width: 75%;
    font-size: 14px;
    font-family: "ABeeZee", serif;
    margin-top: 0;
`
const Title = styled.p`
    width: 75%;
    font-size: 32px;
    // font-weight: 700;
    margin: 0;
    font-family: "ABeeZee", serif;
    font-weight: 400;
    font-style: normal;
`

export {
    LoginButton,
    LoginCard,
    TextField,
    Label,
    SubTitle,
    Title
}