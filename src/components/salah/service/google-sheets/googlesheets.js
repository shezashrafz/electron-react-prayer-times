import React, { Component } from 'react';
import SalahService from '../salah-service';
import Tabletop from 'tabletop';


class GoogleSheets extends Component {
  constructor() {
    super()
    this.state = {
      salahInfo: []
    }
  }

  componentDidMount() {
   let salahInfo =  new SalahService();
   if(!salahInfo.salahInfoCaheExists()){
     this.fetchSalahInfo();
   }

  }

  fetchSalahInfo() {
    let salahInfo =  new SalahService();
    Tabletop.init({
        key: '1g-eOGt7aie3Qz_GkorjsgNuT-AlibpljrMQNZhYZrbc',
        callback: googleData => {
            //   this.setState({
            //     data: googleData
            //   })
            salahInfo.updateSalahInfoCache(googleData);
        },
        simpleSheet: true
    })
}

  // componentDidMount() {
  //   Tabletop.init({
  //     key: '1g-eOGt7aie3Qz_GkorjsgNuT-AlibpljrMQNZhYZrbc',
  //     callback: googleData => {
  //       this.setState({
  //         data: googleData
  //       })
  //     },
  //     simpleSheet: true
  //   })
  // }




  render() {
    const { salahInfo } = this.state
    console.log(salahInfo);
    return (
      <div>
      
                <div key={salahInfo[Date]}>
                  {salahInfo['Date']}
                  {salahInfo['Fajr']}
                </div>
        
           
       
      </div>
    );
  }
}

export default GoogleSheets;