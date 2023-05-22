import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/" style={{ height: '70px' }}>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="favlist">fav</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;