import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component {
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState(null, "/profile/" + username)
  }
  render(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub;

// const React = require('react')
// import { Router } from 'react-router'
//
// const SearchGithub = React.createClass({
//   mixins: [Router.History],
//   getRef (ref) {
//     this.usernameRef = ref
//   },
//   handleSubmit () {
//     let username = this.usernameRef.value
//     this.usernameRef.value = ''
//     this.history.pushState(null, "profile/" +_ username)
//   },
//   render () {
//     return (
//       <div className="col-sm-12">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group col-sm-7">
//             <input type="text" className="form-control" ref={this.getRef} />
//           </div>
//           <div>
//             <button type="submit" className="btn btn-default btn-primary">Search Github</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// })
//
// module.exports = SearchGithub
