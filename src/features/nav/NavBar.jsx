import React from 'react';
import { Menu, Container, Button} from 'semantic-ui-react';

// On récupère le setteur du  booléen en paramètre
// si click, on le met à true, on passe par une fonction intermmédiaire pour éviter tout conflit
export const NavBar=({setFormOpen}) => {

    return(

       <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    Re-vents
                </Menu.Item>
                <Menu name='Events'/>
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                </Menu.Item>

                <Menu.Item>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>

            </Container>

        </Menu>
    )

}
