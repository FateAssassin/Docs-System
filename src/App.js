import SideBar from './components/sidebar';
import NavBar from './components/navbar';
import Content from './components/content';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
