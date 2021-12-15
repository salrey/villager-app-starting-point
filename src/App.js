import { Component } from "react";
import "./App.css";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // no need to use data as a state for now, but this one will change when we use an API
      villagerData: villagerData,
      villagers: [villagerData.ant00],
      currentVillager: villagerData.ant00
    };
  }

  handleChange = () => {
    // const { villagerData } = this.state

    // store it's length and do random 
    // Consider Object.values / Object.entries

    this.setState({currentVillager: "some random villager obj"})
  }

  handleAdd = () => {
    const { villagers, currentVillager } = this.state

    this.setState({villagers: [...villagers, currentVillager]})
  }

  handleClear = () => {
    this.setState({
      villagers: [villagerData.ant00],
      currentVillager: villagerData.ant00
    })
  }

  render() {
    const { villagers, currentVillager } = this.state

    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button onClick={this.handleChange}>Change Villager</button>
          <button onClick={this.handleAdd}>Add Villager to Village</button>
          <button onClick={this.handleClear}>Clear Village</button>
          <div>Current Villager: {currentVillager.name["name-USen"]}</div>
          <div>Total Villagers in Village: {villagers.length}</div>
          <div className="villager-grid"></div>
        </div>
      </div>
    );
  }
}

export default App;
