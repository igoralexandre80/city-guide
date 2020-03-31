import React, { Component } from 'react';
import { InfoConsumer } from './context';

class ReviewCard extends Component {
    render () {

      const { id, name, avatar, comment } = this.props.person;
      return (
          <InfoConsumer>
              {data => (
                  <div className="media mt-5">
                    <img
                       src={avatar}
                       alt={name}
                       style={{ width: '40px' }}
                       className="mr-3"
                    />
                     <div className="media-body">
                        <h5 className="mt-0">{name}</h5>
                        <p>{comment}</p>  
                     </div>
                  </div>
              )}
          </InfoConsumer>
      );
    }
}

export default ReviewCard;