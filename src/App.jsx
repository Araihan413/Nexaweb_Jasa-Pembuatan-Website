import NavbarTop from './components/Fragments/NavbarTop';
import Beranda from './components/pages/beranda';

function App() {
  return (
    <>
      <div className="">
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
