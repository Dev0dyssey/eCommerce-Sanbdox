import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  // Can again be written either code.map(i => { return ()})
  // OR
  // code.map(i => (code))
  <div className="directory-menu">
    {/* ES6 allows us to use ..spread operator if we would be passing props with same names */}
    {/* I.E.: {linkUrl = {linkUrl}, size = {size}} */}
    {/* key={id} still written separate as the prop has a different name to the value */}
    {/* Best practice and prevents verbose repetitive coce */}
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
