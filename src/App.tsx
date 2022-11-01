import Button, { ButtonSecondary, ButtonStroke } from "@components/Button";
import GlobalStyle from "@utils/themes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ margin: "1rem", display: "flex", gap: "1rem" }}>
        <Button>Label</Button>
        <Button disabled={true}>Label</Button>
        <ButtonStroke>Label</ButtonStroke>
        <ButtonStroke disabled={true}>Label</ButtonStroke>
        <ButtonSecondary>Label</ButtonSecondary>
        <ButtonSecondary disabled={true}>Label</ButtonSecondary>
      </div>
    </>
  );
};

export default App;
