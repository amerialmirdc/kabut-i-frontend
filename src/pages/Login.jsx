import { 
  LoginButton, 
  LoginCard,
  TextField,
  Label,
  SubTitle,
  Title
} from "../styles/login"

function Login() {

  return (
    <>
      <LoginCard>
        <Title>Kabut-i</Title>
        <SubTitle>An Intelligent Mushroom House with Environmental Control and Monitoring System for Ganoderma</SubTitle>
        <Label>email</Label>
        <TextField />
        <Label>password</Label>
        <TextField type="password"/>
        <LoginButton>Login</LoginButton>
      </LoginCard>
    </>
  )
}

export default Login