import NavbarTop from './components/Fragments/NavbarTop';
import Beranda from './components/pages/beranda';

function App() {
  return (
    <>
      <div className="container">
        <header>
          <NavbarTop />
        </header>
        <main>
          <Beranda></Beranda>
        </main>
      </div>
    </>
  );
}

export default App;
