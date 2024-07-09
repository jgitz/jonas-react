import { useState } from "react";

/* const initialItems = [
  { id: 1, itemName: "Passports", quantity: 2, packed: false },
  { id: 2, itemName: "Socks", quantity: 12, packed: true },
  { id: 3, itemName: "Charger", quantity: 1, packed: false },
]; */ /* commented on 80-0- */

export default function App() {
  const [items, setItems] = useState(
    []
  ); /* 80-0 lifted from form component so PACKING LIST COMPONENT can access this as props */

  function handleAddItems(newItem) {
    setItems((items) => {
      return [...items, newItem];
    }); /* 80-0 lifted from form component and will be passed in as props to form component */
  }

  function handleDelete(id) {
    setItems((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    ); /* 82 code to delete item using filter */
  } /* 82 handleDelete to delete item on clicking cross */

  function handlePackedItem(id) {
    setItems((items) => items.map((item) => (item.id == id ? { ...item, packed: !item.packed } : item)));
  } /* 83 function to strike off packed item... this will be passed as props to packing list component */

  function handleClear() {

    const closingBooleanFlag = window.confirm('Do you want to clear all list')
    console.log(closingBooleanFlag) // ** window.confirm will return TRUE if clicked YES BUTTON.... returns FALSE if clicked NO BUTTON 

    closingBooleanFlag? setItems([]): setItems(items);
  } /* 87 function to clear the items */

  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItems} />
      <PackingList items={items} onDelete={handleDelete} onPacked={handlePackedItem} onClear={handleClear} />{" "}
      {/* 80-0 passed items array as props to render ui in packinglist component */} {/* 82 pass handleDelete as props */}{" "}
      {/* 83 handlepacked is passed as onPacked props to strike off packed items in item component */} {/* 87 add onClear props to pass handle clear function to clear the list in the Packing list component */}
      <Stats items={items} /> {/* 84-85 pass items as props to set derived state to store stats calculation  */}
    </div>
  );
}

function Logo() {
  return <h1>🎒 Backpack Packer ✅ </h1>;
}

function Form({ onAdd }) /* 80-0 passing onAdd lifted function from app component as props */ {
  /* 73-1 state to store the value of jsx input element */ const [itemName, setItemName] = useState("");

  const [quantity, setQuantity] = useState(1); /* 73-1  state to store dropdown selection*/

  /* const [items, setItems] = useState([]) */ /* 80-0 to store the items added using input field */ /* 80-0 commented... this state is LIFTED to app component */

  /* 72-1 */ function handleSubmit(e) {
    e.preventDefault(); /* 72-1 */

    if (!itemName) return; /* 72-2 guard clause so when the input field is empty NO OBJECT is CREATED   */

    const newItem = { id: Date.now(), itemName, quantity, packed: false }; /* 72-2 to create new object on submit */

    console.log(newItem);

    // function handleAddItems(newItem) {
    //   setItems((items) => {
    //     return [...items, newItem]
    //   }) /* 80-0 to add new item to array.... we us SPREAD OPERATOR and USE PREVIOUS STATE.... as PUSH method mutates the original array  */

    /* 80-0 handleAddItems function is made to EXCLUSIVELY use SET-ITEMS to add new item to ITEMS ARRAY.... separate function is used for ISOLATING codes using functions */

    /* 80-0 commented... as whole HANDLE-ADD-ITEMS function is LIFTED to APP COMPONENT as the states used inside the component i.e items and setItems were already lifted to app component... this lifted function will be passed in as props and called here  */

    //  handleAddItems(newItem) /* 80-0 handleAdd function is INVOKED to add new item to items array  */ /* 80-0 commented as this function is lifted to app component */

    onAdd(newItem); /* 80-0 invoking lifted function from app component using props */

    setItemName(""); /* 72-2 to set itemName to initial value after object creation */
    setQuantity(1); /* 72-2 to set quantity to initial value after object creation */
  }
  return (
    <div className="add-form">
      <h3>What items do you need for your trip ? ✈️</h3>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* 72 create form component elements */} {/* 72-1 set onSubmit attribute */}
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {" "}
          {/* 73-1 set value and onchange for selecting option */} {/* 72 */}
          {/* 72 */}{" "}
          {Array.from({ length: 20 }, (_, i) => {
            return i + 1;
          }).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option> /* 72 */
            );
          })}
        </select>
        <input type="text" placeholder="Item...." value={itemName} onChange={(e) => setItemName(e.target.value)} />{" "}
        {/* 73-1 onChange attribute added to set value of input field to the state named itemName everytime the input value changes  */}
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList({
  items,
  onDelete,
  onPacked,
  onClear
}) /* 80-0 received props from APP COMPONENT */ /* 82- received onDelete prop to PASS it to ITEM COMPONENT */ /* 83 received onPacked props to pass to item component to strike off packed item  */ /* onClear props is received to use handleClear function from the app component to clear the items list  */ {

  const [sortOption, setSortOption] = useState('INPUT ORDER') /* 86 to set sort option  */

  let sortedItemsArray; /* 86 new array to be derived from items array state to set sorting */

  if(sortOption === 'INPUT ORDER') sortedItemsArray = items; 

  if(sortOption === 'ITEM NAME') sortedItemsArray = items.slice().sort((a,b) => a.itemName.localeCompare(b.itemName))  /* 86 - slice() is used to copy the items array and apply sort... as SORT METHOD MUTATES the original array 
  
  ** localeCompare is used to SORT STRINGS ??
  */

  if(sortOption === 'PACKED STATUS') sortedItemsArray = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed)) /* 86 to sort items based on packed status... Number method is used to convert BOOLEAN to number value */

  return (
    <div className="list">
      <ul>
        {/* {initialItems.map((item) => {
          return <Item item={item} key={item.id} />;
        })} */}{" "}
        {/* commented 80-0 */}
        {/* 71 defining ITEM component JSX with prop and using array MAP  */}
        {/* {items && */}
          {/* items.map((item) => { */}
            {/* return ( */}
              {/* <Item item={item} key={item.id} onDelete={onDelete} onPacked={onPacked} /> */}
            {/* ); */}
            
             {/* 82 PASSED ON DELETE to item component */ /* 83 passed ON-PACKED prop to item component to strike off packed item   */}
          {/* })} */} {/* COMMENTED ON 86 as we change the array from items to SORT ITEMS ARRAY FOR SORT PURPOSES */}
          {items &&
          sortedItemsArray.map((item) => {
            return (
              <Item item={item} key={item.id} onDelete={onDelete} onPacked={onPacked} />
            ); /* 82 PASSED ON DELETE to item component */ /* 83 passed ON-PACKED prop to item component to strike off packed item  */ /* 86 changed items to sortedItemsArray to apply map method */
          })}
      </ul>

      
      
      <div className="actions">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}> {/* 86 to set sorting*/}
          <option value="INPUT ORDER" key="">
            SORT BY INPUT ORDER
          </option> {/* 86 to set sorting*/}
          <option value="ITEM NAME" key="">
            SORT BY ITEM NAME
          </option> {/* 86 to set sorting*/}
          <option value="PACKED STATUS" key="">
            SORT BY PACKED STATUS
          </option> {/* 86 to set sorting*/}
        </select>
  
        <button onClick={onClear}>Clear List</button> {/* 87 to clear list on clicking */}
      </div>
    </div>
  );
}

function Item({
  item,
  onDelete,
  onPacked,
}) /* 82 received onDelete prop  */ /* received onPacked prop to strike off packed item */ {
  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={() => onPacked(item.id)} />{" "}
        {/* 83 set onclick with onpacked prop to strike off item which is packed */}
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.itemName}
        </span>
        <button onClick={() => onDelete(item.id)}>❌</button> {/* 82 onclick to delete */}
      </li>
    </>
  );
} /* 71 defining ITEM COMPONENT FUNCTION with CONDITIONALLY RENDERING STYLE  */

function Stats({ items }) /* 84-85.. received items array state to derive states to display statistics */ {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Add Items to Your List</em>
      </footer>
    );

  const totalNumberOfItems = items.length; /* 84-85 total number of item is equal to length of items state array */
  const numberOfPackedItems = items.filter((item) => item.packed === true).length; /* 84- 85 */

  const packedPercentage = Math.round((numberOfPackedItems / totalNumberOfItems) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>You have packed full.. Bon Voyage</em>
      ) : (
        <em>
          You have {totalNumberOfItems} items in your list, and you already packed {numberOfPackedItems} ({packedPercentage}
          %) 💼
        </em>
      )}{" "}
      {/* 84-85 ternary and derived states used to dispalay statistics  */}
    </footer>
  );
}
// **** && conditional rendering WON'T work when defining STYLE ATTRIBUTE.... so USE TERNARY.... as style attribute always EXPECTS a STYLE OBJECT
