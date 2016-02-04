'use strict';

module.exports = function (time) {
    var result = {};
    time = time.toLowerCase().replace(/%20/g, ' ');
    console.log('--------');
    console.log(time);
    console.log('......');
    var date = Number(time) ? new Date(Number(time) * 1000) : new Date(time);
    console.log(date);
    
    if (!date.getTime()) {
        result.unix = null;
        result.natural = null;
    } else {
        result.unix = date.getTime() / 1000;
        result.natural = Month(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
    
    return result;
}

function Month(m) {
    var month;
    switch (m) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = null;
    }
    
    return month;
}