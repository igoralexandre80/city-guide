import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import { InfoConsumer } from '../context';
//import { detailInfo } from '../../data';//

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.news.map(item => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default News;