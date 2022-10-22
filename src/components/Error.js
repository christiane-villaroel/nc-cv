import { Col } from "reactstrap";

const Error = ({ErrorMsg}) => {
    return (
        <Col>
            <h4>{ErrorMsg}</h4>
        </Col>
    );
};

export default Error;