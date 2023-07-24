import { Container } from "react-bootstrap";



export default function About() {
    

    return(
        <>
            <Container style={{padding:"6em"}}>
                This application was built with the following libraries and tools:
                <ul style={{fontFamily:"Lato"}}>
                    <li><b>Front-end:</b> <a href="https://react.dev/">React.JS</a></li>
                    <li><b>Cloud hosting:</b> <a href="https://cloud.google.com/">Google Cloud Platform</a></li>
                    <li><b>Domain registration/DNS:</b> <a href="https://godaddy.com/">GoDaddy.com</a></li>
                    <li><b>Typing:</b> <a href="https://www.typescriptlang.org/">TypeScript</a></li>
                    <li><b>Styling:</b> <a href="https://react-bootstrap.netlify.app/">react-bootstrap</a></li>
                    <li><b>Animations:</b> <a href="https://www.framer.com/motion/">framer-motion</a></li>
                    <li><b>Contact form:</b> <a href="https://www.emailjs.com/docs/examples/reactjs/">emailjs</a></li>
                    <li><b>Routing:</b> <a href="https://reactrouter.com/en/main">react-router</a></li>
                    <li><b>Font:</b> <a href="https://fonts.google.com/specimen/Lato">Googlge Lato</a></li>
                    <li><b>HTML sanitization:</b> <a href="https://github.com/cure53/DOMPurify">dompurify</a></li>
                    <li><b>Alerts:</b> <a href="https://sweetalert2.github.io/">sweetalert2</a></li>
                    <li><b>Portrait:</b> <a href="http://kimiaphotography.com/">Kimia Photography</a></li>
                    <li><b>React Training Course:</b> <a href="https://github.com/TryCatchLearn/Reactivities">TryCatchLearn - Reactivities</a></li>
                </ul>
            </Container>
        </>
    )
}