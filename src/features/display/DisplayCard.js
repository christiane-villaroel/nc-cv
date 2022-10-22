import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

const DisplayCard = (props) =>{
    //const {image, name, description} = item;
    console.log( "props:",props)
    return(
        <Card>
            <CardImg src ={props.item.image} alt = {props.item.name} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;