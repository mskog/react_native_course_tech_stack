import React from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends React.Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.libraries)
    };
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
