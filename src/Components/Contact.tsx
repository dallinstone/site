
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';
export default function Contact() {


    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        
        var service_id = "1";
        if (process.env.REACT_APP_SERVICE_ID)
        {
            service_id = process.env.REACT_APP_SERVICE_ID;
        }
        
        var template_id = "1";
        if (process.env.REACT_APP_TEMPLATE_ID)
        {
            template_id = process.env.REACT_APP_TEMPLATE_ID;
        }

        var public_key = process.env.REACT_APP_PUBLIC_KEY;

        emailjs.sendForm(service_id,template_id, e.target, public_key)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (

        <>
            <Container style={{padding: "2em"}}>
                <div className="App">
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            name='user_email'
                            placeholder='Email…'
                            required
                            icon='mail'
                            iconPosition='left' />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Name'
                            name='user_name'
                            placeholder='Name…'
                            required
                            icon='user circle'
                            iconPosition='left' />
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            name='user_message'
                            placeholder='Message…'
                            required />
                        <Button type='submit' color='green'>Submit</Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}