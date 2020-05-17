import Tabletop from "tabletop";
import moment from "moment";
class GoogleSheetz {
    constructor(){
        this.fetchSalahInfo();

    }

    getSalahTimes(date = null){
        date = date === null ? moment().format("DD/MM/YYYY") : date;

    }

    getSalahInfo(){
        return this.salahInfoCaheExists ? JSON.parse(dummyData) : null;
    }

    salahInfoCaheExists() {
        return window.localStorage.getItem('salahInfoCache') ? true : false;
    }

    getLastUpdatedLocalCache() {
        return window.localStorage.getItem('salahInfo_lastUpdated');
      }

    fetchSalahInfo(){
        Tabletop.init({
            key: '1g-eOGt7aie3Qz_GkorjsgNuT-AlibpljrMQNZhYZrbc',
            callback: googleData => {
              this.setState({
                data: googleData
              })
            },
            simpleSheet: true
          })
        }
    }
export default GoogleSheetz;