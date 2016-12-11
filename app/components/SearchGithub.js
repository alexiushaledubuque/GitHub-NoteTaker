
import React from 'react';
import Router from 'react-router';
import { hashHistory, browserHistory } from 'react-router'

class SearchGithub extends React.Component {
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    const username = this.usernameRef.value
    this.usernameRef.value = '';
    console.log('USERNAME: ', username)
    hashHistory.push(`/profile/${username}`)
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

// import React from 'react';
// import { Router, browserHistory } from 'react-router';
//
// class SearchGithub extends React.Component {
//   getRef(ref){
//     this.usernameRef = ref;
//   }
//   handleSubmit(){
//     const username = this.usernameRef.value;
//     this.usernameRef.value = '';
//     this.props.browserHistory.push(null, "/profile/" + username)
//   }
//   render(){
//     return (
//       <div className="col-sm-12">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group col-sm-7">
//             <input type="text" className="form-control" ref={this.getRef} />
//           </div>
//           <div className="form-group col-sm-5">
//             <button type="submit" className="btn btn-block btn-primary">Search Github</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
//
// SearchGithub.PropTypes = {
//   history: React.PropTypes.object.isRequired
// }
//
// export default SearchGithub;
