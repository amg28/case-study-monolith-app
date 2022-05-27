import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./main";
import Sidebar from "./Sidebar";
import { searchPhotoApi, getPollutionApi } from "./Api";
import { debounce } from "../utils/ReusableFunctions";

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      width: 0, // REPRESENTS THE SCREEN WIDTH
      height: 0, // REPRESENTS THE SCREEN HEIGHT
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.props.searchPhotoApi();
    this.props.getPollutionApi();
  }

  debounced = debounce((search) => {
    if (search !== "") {
      this.props.searchPhotoApi(search);
      this.props.getPollutionApi(search);
    }
  }, 600);

  onChange = (e) => {
    this.setState({ search: e.target.value }, () =>
      this.debounced(this.state.search)
    );
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="container">
        <main>
          <Main
            photo={this.props.pollutionState.photos[0]}
            cityName={this.props.pollutionState.pollutionCityName}
            pullutionData={this.props.pollutionState.pollutionData}
          />
        </main>
        <aside>
          <Sidebar
            search={this.state.search}
            onChange={this.onChange}
            weatherData={this.props.pollutionState.weatherData}
            pollutionData={this.props.pollutionState.pollutionData}
          />
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pollutionState: state.pollutionState,
});
const mapDispatchToProps = {
  searchPhotoApi,
  getPollutionApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pollution);
