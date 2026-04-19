import "./App.css";

function App() {
  return (
    <>
      <header className="pt-2 border-b pb-2">
        <a href="/">SimpleGantt</a>
      </header>

      <main className="grow">
        <section className="flex flex-row">
          <div className="basis-64"></div>
          <div className="basis-128"></div>
        </section>
      </main>

      <footer>
        <div className="flex justify-center border-t border-neutral-300 pt-2 pb-2">
          © {new Date().getFullYear()} simplegantt.hntk03.com
        </div>
      </footer>
    </>
  );
}

export default App;
