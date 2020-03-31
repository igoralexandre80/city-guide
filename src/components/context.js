import React,{ Component } from "react";
// Informações pegas data.js para conumoi de API
import { placeInfo, reviews, detailInfo, news } from '../data';

const InfoContext = React.createContext();

// Provider
// Consumer

 class InfoProvider extends Component {

    state = {
        info: placeInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news
    }

    getItem = id => {
        const item = this.state.info.find(item => item.id ===id);
        return item
    }

    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
        return {
            detailInfo: item
        }
        });
    };

    render () {
      return (
          <InfoContext.Provider value= {{
              info: this.state.info,
              reviews: this.state.reviews,
              maps: this.state.maps,
              headerTitle: this.state.headerTitle,
              headerSubtitle: this.state.headerSubtitle,
              headerText: this.props.headerText,
              detailInfo: this.state.detailInfo,
              news: this.state.news,
              name: this.state.name,
              avatar: this.state.avatar,
              comment: this.state.comment,
              handleDetail: this.handleDetail
          }}>
              {this.props.children}
          </InfoContext.Provider>
       

  )
 }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };