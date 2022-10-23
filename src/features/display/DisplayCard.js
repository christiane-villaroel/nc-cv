import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

const DisplayCard = (props) =>{
   
   // console.log( "PROPS Item:",props.item)
    return(
        <Card>
            <CardImg src={props.item.image} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;