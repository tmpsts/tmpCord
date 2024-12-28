import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <section className="w-full mt-12">
              <div className="container">
                <div className="flex justify-center">
                  <p className="mx-auto text-1xl font-light tracking-wide border border-white/50 text-white/50 px-2 rounded-xl">
                    Version 1.0
                  </p>
                </div>
                <div className="mt-6 mx-auto text-center text-7xl font-extrabold tracking-tight text-white">
                  <span className="text-white/35">tmp</span>Cord
                  <br />
                </div>
              </div>
            </section>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
