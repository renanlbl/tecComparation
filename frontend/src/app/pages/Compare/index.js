import React, { Component } from 'react';
import { connect } from 'react-redux';

//import './styles.scss';

class Comparar extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="content">
        {console.log(data)}
        <h1>Comparar</h1>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  data: store.comparation,
})

export default connect(mapStateToProps)(Comparar)