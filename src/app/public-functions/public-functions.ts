import * as moment from 'jalali-moment';

export class PublicFunctions  {

  constructor() {

  }

  convertTime(unix_timestamp, type): string {
      if(!unix_timestamp)
          return;

      var date = new Date(Math.floor(unix_timestamp));
      var day = date.getDate();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var hours = date.getHours();
      var jDate = moment(year+'/'+ month+'/'+ day).format('jYYYY/jM/jD');
      return jDate;
  }

    convertToPersianNumber(text): string {
    var find = ['1','2','3','4','5','6','7','8','9','0'];
    var replace = ['۱','۲','۳','۴','۵','۶','۷','۸','۹','۰'];
    return text.replaceArray(find,replace);
}

}


