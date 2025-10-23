import './myStyle.css';
function List() {
  const toDo = ['Sort Ticketmaster account', 'Do laundry', 'Make my bed', 'Tidy room', 'Make dinner', 'Prepare for careers chat'];
  return (
    <>
      <h1>My To Do List</h1>
      <ul>
        {toDo.map((item) => <li>{item}</li>)}
      </ul>

    </>
  );
}



export default List;