const { useState } = React;

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(itemName => <GroceryListItem name={itemName}/>)}
  </ul>
);


const GroceryListItem = (props) => {
  const [isDone, setIsDone] =  useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };
  return(
    <li style = {style} onClick={() => setIsDone(!isDone)}>{props.name}</li>
  )
}

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['test', '2', 'wwererers']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));