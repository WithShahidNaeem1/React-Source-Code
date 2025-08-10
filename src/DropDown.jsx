import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Our Stores
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Karachi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Lahore</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Islamabad</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Peshawar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Quetta</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;