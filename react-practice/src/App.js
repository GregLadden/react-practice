import React from "react";
import GithubButton from "./components/github/githubButton";
import WeatherButton from "./components/weather/weatherButton";
import ChooseAlert from "./components/chooseAlert";
import LoadGitHubProfiles from "./components/github/loadProfiles";
import LoadWeatherInfo from "./components/weather/loadWeather";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-900 pb-4">
        <h1 className="text-white text-5xl text-center py-2">React Practice</h1>
        <p className="text-center text-white text-md mb-4">
          Search GitHub profiles and look up your city's weather.
        </p>
      </header>
      <div className="grid grid-cols-2 text-center">
        <GithubButton />
        <WeatherButton />
      </div>
      <ChooseAlert />
      <LoadGitHubProfiles />
      <LoadWeatherInfo />
    </div>
  );
}

export default App;
