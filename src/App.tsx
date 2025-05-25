//import Titulo from "./components/Titulo";
//import Header from "./components/Header";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Fragment>
      <Header />
      <MenuBar />
      <VideoPlayer />
  </Fragment>
  )
}

export default App;
