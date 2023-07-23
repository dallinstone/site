import { Variants, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Employer from "./Employer";
import Education from "./Education";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import { sanitize } from "dompurify";

const variants: Variants = {
    closed: {
        opacity: 0,
        x: -300,
        visibility: "hidden",
        display: "none",
    },
    open: {
        opacity: 1,
        x: 0,
        visibility: "visible",
    },
}



export default function Experience() {
    const [openItem, setOpenItem] = useState(-1);

    return (
        <>
            {/* Dallin Stone header comoponent */}
            <Container fluid style={{ fontFamily: "Lato", alignContent: "left", paddingLeft: 0, paddingBottom: "7em", paddingRight: "3em" }}>
                <Row style={{ backgroundColor: "var(--maroon)", color: "white" }}>
                    <Col xs={1} />
                    <Col xs={11} md={5} >
                        <h1><br /></h1>
                        <h1 >
                            Dallin Stone
                        </h1>
                        <div>
                            Fort Worth, TX
                        </div>
                        <h1><br /></h1>
                    </Col>
                    <Col xs={12} md={6} style={{ backgroundColor: "white" }}>
                        <Row>
                            <br />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} />
                    <Col xs={11} md={5}>
                        <h2>
                            Work experience
                        </h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} />
                    {/* colored work item component */}
                    <Col xs={11} md={5}>
                        <nav>
                            {empItems.map((item, idx) => (
                                <Fragment key={item.name + "-" + "1" + "-" + idx}>
                                    <Employer
                                        Employer={item}
                                        index={idx}
                                        openItem={openItem}
                                        setOpenItem={setOpenItem}
                                    />
                                </Fragment>
                            ))}
                        </nav>
                    </Col>
                    {/* experience items list  */}
                    <Col xs={12} md={6}>
                        {empItems.map((item, idx) => (
                            <motion.div
                                variants={variants}
                                animate={openItem === idx ? "open" : "closed"}
                                key={item.name}
                            >
                                <ul>
                                    {item.exp_items.map((expitem, itemdx) => (
                                        <li key={item.name + "-" + itemdx} dangerouslySetInnerHTML={{ __html: sanitize(expitem) }}></li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </Col>
                </Row >
                <Row>
                    <Col>
                        <br />
                    </Col>
                </Row>
                {/* education items */}
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={11} md={5}>
                        <h2>
                            Education
                        </h2>
                        <hr />
                    </Col>
                </Row>
                {eduItems.map((item, index) => (
                    <div key={item.school + "-" + index}>
                        <Education edu={item} />
                    </div>
                ))}

            </Container >
        </>
    )
}