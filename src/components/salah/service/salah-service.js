import moment from "moment";
import dummyData from "../../../data/times.json";
import Tabletop from 'tabletop';


class SalahService {
    constructor(){
        this.updateSalahInfo();
        this.state = {
            data: [],
            isLoading:true
        }

    }
   
    getSalahTimes(date = null) {
        date = date === null ? moment().format("DD/MM") : date;
        let times = this.getSalahInfo();
        return times ? times[date] : [];
    }

    isLoading(){
        return this.state.isLoading;
    }

    getSalahDummyTimes(date) {
        date = date === null ? moment().format("DD/MM") : date;
        var times = dummyData[date];
        return times;
    }

    getSalahInfo() {
        return this.salahInfoCaheExists ? JSON.parse(window.localStorage.getItem('salahInfoCache')) : null;
    }

    salahInfoCaheExists() {
        return window.localStorage.getItem('salahInfoCache') ? true : false;
    }

    getLastUpdatedLocalCache() {
        return window.localStorage.getItem('salahInfo_lastUpdated');
    }

    getSalahInfoFromGoogleSheets() {
        return this.fetchSalahInfo();
    }

    clearSalahInfoFromGoogleSheets(){
        if(this.salahInfoCaheExists()) window.localStorage.removeItem('salahInfoCache');
        window.localStorage.removeItem('prayerData');
    }

    fetchSalahInfo() {
    return Tabletop.init({
            key: '1g-eOGt7aie3Qz_GkorjsgNuT-AlibpljrMQNZhYZrbc',
            callback: googleData => {
        this.updateSalahInfoCache(googleData);
              
            },
            simpleSheet: true
        })
    }


    updateSalahInfoCache(googleData = []) {
        var formattedData = {};
        //save as map k->v - key being the date in dd/mm format
        googleData.forEach(row => {
             formattedData[row.Date] = row;
        });
        let st = JSON.stringify(formattedData);
        window.localStorage.setItem('salahInfoCache',st);
        window.localStorage.setItem('salahInfo_lastUpdated', moment().unix());
        return formattedData
    }

    updateSalahInfo() {
        let lastUpdated = moment().unix() - parseInt(this.getLastUpdatedLocalCache());
        //older thann 12hrs refresh
        if (isNaN(lastUpdated) || lastUpdated > 2 || !this.salahInfoCaheExists) {
            this.getSalahInfoFromGoogleSheets().then(() => {
                if (!this.salahInfoCaheExists) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                }
            });
            console.info('Updating Salah Info....');
        }
    }

}


export default SalahService;