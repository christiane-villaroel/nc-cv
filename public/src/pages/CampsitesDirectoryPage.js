import {Container} from "reactstrap";
import CampsiteList from "../features/campsites/CampsitesList";
import SubHeader from "../components/SubHeader";

const CampsitesDirecotryPage = () =>{
    return (
        <Container>
            <SubHeader current='Directory'/>
           <CampsiteList/>
        </Container>
    );
};

export default CampsitesDirecotryPage;