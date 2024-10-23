import React from "react";
import FilmItems from "./FilmItems";

class Starwars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  getNewCharacter() {
    //console.log("Get new character on the click")
    let randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        });
      });
  }

  render() {
    const movies = this.state.films.map((url,i) => {
      return <FilmItems key={i} url={url}/>
    })

    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm </p>
            <p>
              <a href={this.state.homeworld}>HomeWorld</a>
            </p>
            <ul>
              {movies}
            </ul>
          </div>
        )}
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          {" "}
          Click me to Randomize
        </button>
      </div>
    );
  }
}

export default Starwars;
