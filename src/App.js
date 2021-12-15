import { Component } from "react";
import "./App.css";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // no need to use data as a state for now, but this one will change when we use an API
      villagerData: villagerData,
      villagers: [],
      currentVillager: villagerData.ant00
    };
  }

  handleChange = () => {
    const { villagerData } = this.state

    //Get the length of the data and find a random ID
    const selectedID = Math.floor(Math.random() * Object.keys(villagerData).length)

    // Select the object with the given random ID
    const currentVillager = Object.values(villagerData)[selectedID]

    this.setState({currentVillager: currentVillager})
  }

  handleAdd = () => {
    const { villagers, currentVillager } = this.state

    this.setState({villagers: [...villagers, currentVillager]})
  }

  handleClear = () => {
    this.setState({
      villagers: [],
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
