import React from "react";
import PropTypes from "prop-types";

class RecentComment extends React.Component {
  render() {
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4 [General]                                                  */
    /*--------------------------------------------------------------------------------*/
    const image = (
      <div className="p-2">
        <img src={this.props.image} alt="user" width="50" className="rounded-circle" />
      </div>
    );
    const badge = (
      <span className={"badge badge-" + this.props.badgeColor}>{this.props.badge}</span>
    );
    const name = <h6 className="font-medium">{this.props.name}</h6>;
    const comment = <span className="mb-3 d-block">{this.props.comment}</span>
    const date = <span className="text-muted float-right">{this.props.date}</span>
    return (
      <div className="d-flex flex-row comment-row mt-0">
        {image}
        <div className="comment-text w-100">
          {name}
          {comment}
          <div className="comment-footer">
            {date}
            {badge}
            <span className="action-icons">
              <a href="#pencil"><i className="ti-pencil-alt"></i></a>
              <a href="#check"><i className="ti-check"></i></a>
              <a href="#heart"><i className="ti-heart"></i></a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

RecentComment.defaultProps = {
  badgeColor: "primary"
};

RecentComment.propTypes = {
  badgeColor: PropTypes.oneOf([
    "primary",
    "success",
    "info",
    "danger",
    "warning",
    "orange",
    "cyan"
  ]),
  image: PropTypes.string,
  name: PropTypes.node,
  comment: PropTypes.node,
  date: PropTypes.node,
  badge: PropTypes.string
};

export default RecentComment;
