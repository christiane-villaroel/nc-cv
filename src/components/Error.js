import { Col } from "reactstrap";

const Error = (props) => {
    console.log("ERROR MESSAGE", props.errMsg)
    return (
        <Col md='5' className='m-1'>
            <h4>{props.errMsg}</h4>
        </Col>
    );
};

export default Error;