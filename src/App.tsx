import ListGroup from "./Components/ListGroup";


function App() {
  const items = ["Neymar Jr", "Coutinho", "Pogba", "Hazard", "Sterling", "Jesus"];
  
  const handleSelectedItem=(item:string)=>{
    console.log(item)
  }
  return (
    <>
    <div>
      <ListGroup items={items} heading="Players" onSelectItem={handleSelectedItem}/>
    </div>
    
    </>
  );
}

export default App;
