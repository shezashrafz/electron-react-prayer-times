import { userEffect, useState } from 'react';
import Tabletop from 'tabletop';
//import moment from 'moment';

export default function useTimesFetch() {
    const [times, setData] = useState({ times: [], isFetching: false });

    userEffect(() => {
        setData({ times: times, isFetching: true });
        var formattedData = {};
        Tabletop.init({
            key: '1g-eOGt7aie3Qz_GkorjsgNuT-AlibpljrMQNZhYZrbc',
            callback: googleData => {
                googleData.forEach(row => {
                    formattedData[row.Date] = row;
                });
            },
            simpleSheet: true
        });
        setData({ times: formattedData, isFetching: false });
    }, []);
    return times;
}

