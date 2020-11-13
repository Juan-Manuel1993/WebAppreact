import React from 'react';
import {Segment,Form,Header,Button} from 'semantic-ui-react';


export const EventForm =({setFormOpen}) => {

return (

  <Segment clearing>

    <Header content='Create new event' />
    <Form>
      <Form.Field>
        <input type="text" placeholder='Event title'/>
        <input type="text" placeholder='Category'/>
        <input type="text" placeholder='Description'/>
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='Venue'/>
        <input type="date" placeholder='Date'/>
        <Button type='submit' floated='right' positive content='Submit'/>
        <Button
             onClick={() => setFormOpen(false)}
             type='submit'
             floated='right'
             positive content='Cancel'/>

      </Form.Field>
    </Form>




  </Segment>


)


}
