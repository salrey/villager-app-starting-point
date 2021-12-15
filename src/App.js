import { Component } from "react";
import "./App.css";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // no need to use data as a state for now, but this one will change when we use an API
      villagerData: {},
      villagers: [],
      currentVillager: villagerData.ant00,
      showVillage: true
    };
  }

  handleChange = () => {
    const { villagerData } = this.state

    //Get the length of the data and find a random ID via Object keys
    const selectedID = Math.floor(Math.random() * Object.keys(villagerData).length)

    // Select the object with the given random ID via index/bracket notation of an array of villagerData object values
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

  toggleVillageHiding = () => {
    const {showVillage} = this.state
    this.setState({showVillage: !showVillage})  
  }

  //to grab data from API
  // http://acnhapi.com/doc#tag/Villagers
  componentDidMount() {
    fetch('https://acnhapi.com/v1/villagers')
    .then((response) => response.json())
    .then((villagers) => this.setState({villagerData: villagers}))
  }

  render() {
    const { villagers, currentVillager, showVillage } = this.state
    const names = villagers.map((villager) => <p key={villager.id} >{villager.name["name-USen"]}</p>)

    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button onClick={this.handleChange}>Change Villager</button>
          <button onClick={this.handleAdd}>Add Villager to Village</button>
          <button onClick={this.handleClear}>Clear Village</button>
          <div>Current Villager: {currentVillager.name["name-USen"]}</div>
          <div>Total Villagers in Village: {villagers.length}</div>
          <button onClick={this.toggleVillageHiding}>Show/Hide Village</button>
          <div className="villager-grid">{showVillage && names}</div>
        </div>
      </div>
    );
  }
}

export default App;
