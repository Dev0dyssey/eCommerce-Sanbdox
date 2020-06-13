import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { firestore } from "../../firebase/firebase.utils";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log("I am subscribing");
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));
    // When we return a method from useEffect (a clean up method) we replicate the usage of componentWillUnmount() lifecycle hook
    return () => {
      console.log("I am unsubscribing");
      unsubscribeFromCollections();
    };
  }, []);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps = props of the component we are wrapping inside connect()
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
