import React, {Component} from 'react';
import Talent from './Talent';
import PropTypes from 'prop-types';

import notAnyTalent from '../../../img/notAnyTalents.png';

import './style/listOfTalentsStyle.css';

class ListOfTalents extends Component {

  handleClickBtn = () => {
    this.props.setPage();
    this.props.fetchTalents();
  };

  render() {
    const data = this.props.data;
    const isFetching = this.props.isFetching;
    return(
      <div className="list-talents">
        {data.length > 0 ?
          data.map((talent) => (
            <Talent 
              key={talent.id}
              id={talent.id}
              data={talent}
            />
          )) : 
          <div className={isFetching ? "not-talent-block-hidden" : "not-talents-block"}>
            <img src={notAnyTalent} alt="noJob" className="img-none-talent"/>
            <h2 className="not-talents-title">We didn’t find anybody</h2>
            <p className="not-talents-text">Please try modifying your search to get more results.</p>
          </div>
        }
        <button 
          className={data.length > 0 ? "show-more" : "not-show-btn"} 
          onClick={this.handleClickBtn} 
        >Load more</button>
      </div>
    )
  };
};

ListOfTalents.propTypes = {
  data: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  fetchTalents: PropTypes.func.isRequired,
};

export default ListOfTalents;