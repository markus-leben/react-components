const { useState } = React;

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(itemName => <GroceryListItem name={itemName}/>)}
  </ul>
);


const GroceryListItem = (props) => {
  const [isDone, setIsDone] =  useState(false);
  const [isHover, setIsHover] =  useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    'font-weight': isHover ? 'bold': 'normal'
  };
  return(
    <li style = {style}
    onClick={() => setIsDone(!isDone)}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}>{props.name}</li>
  )
}

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['test', '2', 'wwererers']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));