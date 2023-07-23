import { Variants, motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { employmentItem } from "../../Features/Models/EmploymentItem";
import { Fragment } from "react";

interface Props {
    Employer: employmentItem,
    index: number,
    openItem: number,
    setOpenItem: Function,

}

const variants: Variants = {
    closed: {
        opacity: 0,
        x: -300,
        visibility: "hidden",
        display: "none"
    },
    open: {
        opacity: 1,
        x: 0,
        visibility: "visible",
    },
}

const textVariant: Variants = {
    open: { color: '#fff' },
    closed: { color: '#000' },
}


export default function Employer({ Employer, index, openItem, setOpenItem, }: Props) {

    function clickEvent() {
        if (openItem === index) {
            setOpenItem(-1);
        }
        else {
            setOpenItem(index);
        }
    }

    return (
        <Fragment key={Employer.name + "-" + index}>
            <motion.button

                name={Employer.name}
                onClick={clickEvent}
                whileTap={{ scale: 0.97 }}
                animate={openItem === index ? { backgroundColor: "var(--lightmaroon)" } : { backgroundColor: "var(--greyblue)" }}
            >
                <Container>
                    <Row>
                        <Col xs={10} sm={11}>
                            <motion.div
                                animate={openItem === index ? "open" : "closed"}
                                variants={textVariant}
                            >
                                <Container>
                                    <Row>
                                        <h3>
                                            {Employer.name}
                                        </h3>
                                    </Row>
                                    <Row>
                                        <h5 key={Employer.name + "10"}>
                                            {Employer.title}
                                        </h5>
                                    </Row>
                                    <Row key={Employer.name + "11"}>
                                        <span key={Employer.name + "12"}>
                                            {Employer.dates}
                                        </span>
                                    </Row>
                                </Container>
                            </motion.div>
                        </Col>
                        <Col xs={1} key={Employer.name + "13"}>
                            <Container key={Employer.name + "14"}>
                                <Row key={Employer.name + "15"}>&nbsp;</Row>
                                <Row key={Employer.name + "16"}>
                                    <motion.div className="arrow" style={{ transformOrigin: "75% 50%" }}
                                        animate={{ rotate: openItem === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        key={Employer.name + "17"}>
                                        <svg width="25" height="25" viewBox="0 0 20 20" key={Employer.name + "18"}>
                                            <path d="M9 0 L 9 20 L 0 10"
                                                key={Employer.name + "19"} />
                                        </svg>
                                    </motion.div>
                                </Row>
                                <Row key={Employer.name + "20"}>&nbsp;</Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </motion.button>
        </Fragment>
    )
}