import "./App.css";
import Tasks from "./Tasks.tsx";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <header className="pt-2 border-b pb-2 border-neutral-300">
          <a href="/" className="text-2xl">
            SimpleGantt
          </a>
        </header>

        <main className="flex-1">
          <section className="flex flex-row">
            <div className="basis-64">
              <Tasks />
            </div>
            <div className="basis-128"></div>
          </section>
        </main>

        <footer>
          <div className="flex justify-center border-t border-neutral-300 pt-2 pb-2">
            © {new Date().getFullYear()} simplegantt.hntk03.com
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
