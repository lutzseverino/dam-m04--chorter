import Button from "@components/Button";
import GlobalStyle from "@utils/themes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ margin: "1rem", display: "flex", gap: "1rem" }}>
        <Button>Label</Button>
        <Button disabled={true}>Label</Button>
        <Button variant="stroke">Label</Button>
        <Button variant="stroke" disabled={true}>
          Label
        </Button>
        <Button variant="secondary">Label</Button>
        <Button variant="secondary" disabled={true}>
          Label
        </Button>
      </div>
    </>
  );
};

export default App;
