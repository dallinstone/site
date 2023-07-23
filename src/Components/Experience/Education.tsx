import { Col, Row } from "react-bootstrap";
import { EducationItem } from "../../Features/Models/EducationItem";

interface Props {
    edu: EducationItem
}


export default function Education({edu}: Props) {

    return (
    <><Row>
            <Col xs={1} />
            <Col xs={11}>
                <h3>
                    {edu.school}
                </h3>
            </Col>
        </Row><Row>
                <Col xs={1} />
                <Col xs={11}>
                    <h5>
                        {edu.major}
                    </h5>
                </Col>
            </Row><Row>
                <Col xs={1} />
                <Col xs={11}>
                    {edu.years}
                </Col>
            </Row><Row>
                <Col xs={1} />
                <Col xs={11}>
                    {edu.minor}
                </Col>
            </Row><Row>
                <Col>
                    <br />
                </Col>
            </Row></>
    )
}