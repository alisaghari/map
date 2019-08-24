import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    DELETE_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';

const fakeData = {
    point: [
        {id: 1,latitude: 40.3594230, longitude: 20.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 2,latitude: 45.3594230, longitude: 25.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 3,latitude: 50.3594230, longitude: 30.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 4,latitude: 55.3594230, longitude: 35.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 5,latitude: 60.3594230, longitude: 40.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 6,latitude: 65.3594230, longitude: 45.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
        {id: 7,latitude: 70.3594230, longitude: 50.0210710, marker_src: 'https://lifedeck.biz/wp-content/uploads/2017/12/map-marker-icon.png'},
    ],
    user: [
        {id: 1, name: 'John'},
        {id: 1, name: 'Bob'},
    ]
};

export default async (type, resource, params) => {
    console.log('dataProvider.js:28', {type, resource, params});
    switch (type) {
        case GET_LIST:
            return {
                data: fakeData[resource],
                total: fakeData[resource].length,
            };

        case GET_ONE:
            console.log('dataProvider.js:36', fakeData[resource].find(item => item.id === params.id));
            return {
                data: fakeData[resource].find(item => item.id == params.id),
            };

        default:
            console.log(type + ' is not defined!', resource, params);
            throw type + ' is not defined!';
    }
};
