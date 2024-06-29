import {
  BoxProps,
  CentedBoxProps,
  ButtonProps,
  HomePageProps,
} from "./types/interfaces";
import "./App.css";

const Box = ({ children, className }: BoxProps) => (
  <div
    style={{ padding: "20px", border: "1px solid peru" }}
    className={className}
  >
    {children}
  </div>
);

const CentedBox = ({ children }: CentedBoxProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      border: "2px solid green",
      marginTop: "10px",
    }}
  >
    {children}
  </div>
);
const Button = ({ children }: ButtonProps) => <button>{children}</button>;
const HomePage = ({ title }: HomePageProps) => (
  <Box className="App">
    <h1>{title}</h1>
    <h2>React children with typescript</h2>
    <h3>React children with typescript</h3>
    <Button>Click me</Button>
    <CentedBox>
      <h2>CenterBox</h2>
    </CentedBox>
  </Box>
);

function App() {
  return <HomePage title="Homepage" />;
}

export default App;
