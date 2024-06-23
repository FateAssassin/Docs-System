import SideBar from './components/sidebar';
import NavBar from './components/navbar';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
