import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

var items = [
  {
    name: "Sweets",
    calorie: 450
  },
  {
    name: "Biryani",
    calorie: 200
  },
  {
    name: "Chocolates",
    calorie: 300
  },
  {
    name: "Pizza",
    calorie: 200
  },
  {
    name: "ThickShakes",
    calorie: 300
  }
];

function ItemsDisplay({ name, calorie, OnItemsDisplayClick }) {
  return (
    <div onClick={() => OnItemsDisplayClick(calorie)}>
      <ul class="list-group">
        <li
          style={{ margin: "1%" }}
          class="list-group-item-dark d-flex justify-content-between align-items-center"
        >
          <h4>
            <strong style={{ marginLeft: "3%" }}>{name}</strong>
          </h4>
          <span
            style={{
              marginTop: "0.5%",
              marginBottom: "0.5%",
              marginRight: "5%"
            }}
            class="btn btn-secondary"
          >
            {calorie} calories
          </span>
        </li>
      </ul>
    </div>
  );
}

function TotalCalorie({ totalcalorie }) {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h2 style={{ paddingLeft: "80%" }}>
              You have consumed {totalcalorie} calories today!!!
            </h2>
          </a>
        </div>
      </nav>
    </div>
  );
}

function Heading({ head }) {
  return (
    <h1>
      <strong>{head}</strong>
    </h1>
  );
}

function HandlingData({ items, ClickHandler }) {
  return items.map(({ name, calorie }) => (
    <ItemsDisplay
      key={name}
      name={name}
      calorie={calorie}
      OnItemsDisplayClick={ClickHandler}
    />
  ));
}

class App extends React.Component {
  state = {
    totalcalorie: 0
  };

  clickedAction = (calorie) =>
    this.setState({ totalcalorie: this.state.totalcalorie + calorie });

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <Heading head="CALORIE COUNT" />
            </a>
          </div>
        </nav>

        <HandlingData items={items} ClickHandler={this.clickedAction} />
        <TotalCalorie totalcalorie={this.state.totalcalorie} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
