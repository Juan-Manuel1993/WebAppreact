import React from 'react';
import {List,Image} from 'semantic-ui-react';

// On récupère l'image 
export const EventListAttendee= ({attendee}) => {

    return (
        <List.Item>
          <Image size='mini' circular src ={attendee.photoURL} />
        </List.Item>
    )

}
