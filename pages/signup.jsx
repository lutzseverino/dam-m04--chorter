import styled from "styled-components";
import Section from "../components/Section";
import Dialog from "../components/actions/Dialog";
import Input from "../components/actions/Input";
import Button from "../components/actions/Button";

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SignUp = () => {
  return (
    <Section>
      <Dialog>
        <form action="/api/auth/signup" method="POST">
          <StyledRegister>
            <label htmlFor="email">Email</label>
            <Input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" id="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <Button type="submit">Sign Up</Button>
          </StyledRegister>
        </form>
      </Dialog>
    </Section>
  );
};

export default SignUp;
