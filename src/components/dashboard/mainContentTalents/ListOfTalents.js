import React, {Component} from 'react'
import Talent from './Talent'

import './style/listOfTalentsStyle.css'

class ListOfTalents extends Component {

  handleClickBtn = () => {
    this.props.setPage();
    this.props.fetchTalents();
  }

  render() {
    const data = this.props.data
    return(
      <div className="list-talents">
        {
          data.map((talent) => (
            <Talent 
              key={talent.id}
              id={talent.id}
              data={talent}
            />
          ))
        }
        <button className="show-more" onClick={this.handleClickBtn} >Load more</button>
      </div>
    )
  }
}

export default ListOfTalents