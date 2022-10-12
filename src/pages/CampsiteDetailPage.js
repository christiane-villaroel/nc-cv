import { useSelector } from "react-redux";
import {Container, Row} from "reactstrap";
import { useParams} from "react-router-dom";
import { selectCampsiteByID } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = ()=>{
    const {campsiteId} = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:',campsite)
    return (
        <Container>
            <SubHeader current={campsite.name} detail={true}/>
            <Row>
                <CampsiteDetail campsite={campsite}/>
                <CommentList campsiteId={campsiteId}/>
            </Row>
        </Container>
    )
}
export default CampsiteDetailPage;