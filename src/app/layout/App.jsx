import React  ,{Fragment,useState}from 'react';
import {Container} from 'semantic-ui-react'
import {EventDashboard} from '../../features/events/eventDashboard/EventDashboard';
import {NavBar} from '../../features/nav/NavBar';
// Deux manières de créer des éléments const title = React.CreateElement('h1', {}, 'Revents no JSX'); ou  <h1>Re-vents</h1>
// const div = React.CreateElement('div', {className: 'App'}, title) ou <div className="App">  </div>
//const bouton = React.createElement('button', {className: 'ui icon red button'},icone); ou <button className='ui icon red button'> <i className='user icon'/> CSS Button
//    <Button icon='user' content= 'React Button' color = 'green'/> avec semantic react
function App() {
/*    const title = React.createElement('h1', {}, 'Revents no JSX');
    const icone = React.createElement('i',{}, 'css Button' );
    const bouton = React.createElement('button', {className: 'ui icon red button'},icone);
    const div = React.createElement('div', {className: 'App'}, title,bouton);
    */

    //Création d'un booléen qu'on met à false
      const[formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
        <NavBar setFormOpen={setFormOpen}/>
        <Container className='main'>
            <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
        </Container>
    </Fragment>

  );
}

export default App;
