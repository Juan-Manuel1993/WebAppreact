import React, {Fragment} from 'react';
import {EventListitem} from './EventListitem'

export const EventList= ({events}) => {

    return (
        <Fragment>
            {events.map(event => (
                <EventListitem  event = {event} key ={event.id} />
            ))}


        </Fragment>

    )


}
