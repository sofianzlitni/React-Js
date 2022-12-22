import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic from './pic.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pic1 from './cardPic-1.jpg'
import Pic2 from './cardPic-2.jpg'
import Pic3 from './cardPic-3.jpg'
import Pic4 from './cardPic-4.jpg'
import Pic5 from './cardPic-5.jpg'
import Pic6 from './cardPic-6.jpg'
import Pic7 from './cardPic-7.jpg'
import Pic8 from './cardPic-8.jpg'
import Pic9 from './cardPic-9.jpg'



function App() {
  return (
    <div>
     <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
</style>


     <Navbar className='shark'>
        <Container>
          <Navbar.Brand href="#home">Cartoon <br></br> World</Navbar.Brand>
          <img src={pic} alt="Logo" />
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className='elephant'>Welcome to Cartoon World</h1>
<br></br>
      <CardGroup className='Group-1'>
      <Card>
        <Card.Img variant="top" src={Pic1} />
        <Card.Body>
          <Card.Title>Samurai Jack</Card.Title>
          <Card.Text>
          Samurai Jack originally ran for four seasons comprising thirteen episodes each until September 25, 2004, without concluding the overarching story.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic2} />
        <Card.Body>
          <Card.Title>Courage the Cowardly Dog</Card.Title>
          <Card.Text>
          Courage the Cowardly Dog originally was premiered as a short on February 18, 1996. The show premiered on November 12, 1999, and became the highest-rated premiere in Cartoon Network history at the time..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic3} />
        <Card.Body>
          <Card.Title>Dexter's Laboratory</Card.Title>
          <Card.Text>
          Dexter's Laboratory premiered on TNT on April 27, 1996, and the following day on Cartoon Network and TBS.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
<br></br>
    <CardGroup className='Group-2'>
      <Card>
        <Card.Img variant="top" src={Pic4} />
        <Card.Body>
          <Card.Title>The Powerpuff Girls</Card.Title>
          <Card.Text>
          The Powerpuff Girls series debuted on November 18, 1998, and was the highest-rated premiere in Cartoon Network's history at the time.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic5} />
        <Card.Body>
          <Card.Title>Johnny Bravo</Card.Title>
          <Card.Text>
          Johnny Bravo premiered on July 14, 1997, and the first season completed production in December of that year.

.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic6} />
        <Card.Body>
          <Card.Title>Ed, Edd n Eddy</Card.Title>
          <Card.Text>Ed, Edd n Eddy was originally set to premiere on November 7, 1998, the pilot, "The Ed-touchables / Nagged to Ed," aired on January 4, 1999, as the sixth Cartoon Cartoon, due to minor post-production delays. </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    <CardGroup className='Group-3'>
      <Card>
        <Card.Img variant="top" src={Pic7} />
        <Card.Body>
          <Card.Title>The Cramp Twins</Card.Title>
          <Card.Text>
          The Cramp Twins premiered in the United Kingdom on September 3, 2001 on Cartoon Network and on BBC One during the CBBC programming block, later airing on the CBBC channel itself in February 2002.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic8} />
        <Card.Body>
          <Card.Title>Teen Titans</Card.Title>
          <Card.Text>
          Teen Titans premiered on Cartoon Network on July 19, 2003; and its first two seasons also aired on Kids' WB. Initially, only four seasons were planned; but the popularity of the series led to Cartoon Network's ordering a fifth season.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Pic9} />
        <Card.Body>
          <Card.Title>The Grim Adventures of Billy & Mandy</Card.Title>
          <Card.Text>
          Billy & Mandy began as a series of segments on Grim & Evil, from which it was a spin-off, along with sister series Evil Con Carne, on August 24, 2001.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

      
    </div>

    
  );
}

export default App;
