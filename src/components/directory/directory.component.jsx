import React from "react";

import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ section }) => (
  <div className="directory-menu">
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
