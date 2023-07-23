import { Col, Container, Image, Row } from "react-bootstrap"
import photo from "../public/profile.jpeg"
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
};

export default function HomePage() {

    return (
        <>
            <motion.article
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 1 } } }}
            >
                <div style={{ height: "9vh" }}>
                    <Container fluid className="vh-93" style={{ paddingLeft: 0, paddingRight: 0, height: "100%" }}>
                        <Row>

                            <Col xs={12} md={6}>
                                <Image style={{ objectFit: "cover", height: "93vh" }} fluid src={photo} />
                            </Col>
                            <Col xs={12} md={6}>
                                <Container fluid style={{ height: "100%" }}>
                                    <Row>
                                        <Col><br /></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 style={{ fontFamily: "Lato" }}>
                                                Dallin Stone
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1} />
                                        <Col xs={11}>
                                            <h4 style={{ fontFamily: "Lato" }}>
                                                Experienced web developer
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} />
                                        <Col xs={10}>
                                            I'm a web developer — but not just a web developer. I'm also a
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Container>
                                                <Row><Col><br /></Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={7}></Col>
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Dog owner
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={2}></Col>
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            TV binge watcher
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={9}></Col>
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Amateur Cook
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Problem solver
                                                        </motion.div>
                                                    </Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={4} />
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Lego collector
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={7} />
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Mandarin speaker
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={1}></Col>
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Database expert
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                                <Row><Col><br /></Col></Row>
                                                <Row>
                                                    <Col xs={5} />
                                                    <Col>
                                                        <motion.div variants={itemVariants}>
                                                            Motivated learner
                                                        </motion.div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </motion.article></>
    )
}