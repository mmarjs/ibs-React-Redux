import { connect } from "react-redux";
import { sendMsg } from "../../redux/chat/action";
import chatMsgForm from "../../components/chat/chatMsgForm";

const mapStateToProps = state => ({
    id: state.chatReducer.chatContent
})

const mapDispatchToProps = dispatch => ({
    onClick: (id, chatMsg) => dispatch(sendMsg(id, chatMsg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(chatMsgForm);