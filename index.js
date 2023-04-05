function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState("");
  const [color, setColor] = React.useState("#111");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header" style={{ color: color }}>
              Quotes RNG
            </div>
            <div className="card-body">
              {randomQuotes ? (
                <>
                  <h5 className="card-title" style={{ color: color }}>
                    -{randomQuotes.author || "No author"}
                  </h5>
                  <p className="card-text" style={{ color: color }}>
                    &quot;{randomQuotes.text}&quot;
                  </p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <button onClick={getNewQuote} className="btn btn-primary ml-3">
                  New Quote
                </button>

                <a href=" " className="btn btn-warning">
                  <i class="fa fa-twitter"></i>
                </a>

                <a href="" className="btn btn-danger">
                  <i className="fa fa-tumblr"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
