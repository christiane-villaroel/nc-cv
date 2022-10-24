import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from '../comments/CommentSlice';
import CommentForm from '../comments/CommentForm';
import Error from '../../components/Error';
import Loading from "../../components/Loading";

function CommentList({ campsiteId }) {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg );
    
    console.log("comments length from CommentList:",comments.commentItem.length)
    if (isLoading) {
        return (
            /* removed Row Component, so Error and Loading Content can be
           nested in the same Row container as campsite image. Displayed on right side just like Comments section
           */
                <Loading />
           
        );
    }
    if (errMsg) {
        return (
           /* removed Row Component, so Error and Loading Content can be
           nested in the same Row container as campsite image. Displayed on right side just like Comments section
           */
                <Error errMsg={errMsg}/>
            
        );
    }
    if (comments && comments.commentItem.length > 0) {
        return (
            <Col md='5' className='m-1'>
                 <h4>Comments</h4> 
                {comments.commentItem.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
}   

export default CommentList;