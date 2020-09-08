/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format(datetime) {
  return formatWithSeperator(datetime, "/", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param  国际化日期格式
 */
export function formatWithSeperator(datetime, dateSeprator, timeSeprator, type) {
  if (datetime != null) {
    // console.log(datetime)
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month =dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1): dateMat.getMonth() + 1;
    const day = dateMat.getDate() < 10 ?"0"+(dateMat.getDate()) :dateMat.getDate();
    const hh = dateMat.getHours()< 10 ? "0" +(dateMat.getHours()) :dateMat.getHours();
    const mm = dateMat.getMinutes()< 10 ? "0" +(dateMat.getMinutes()) : dateMat.getMinutes();
    const ss = dateMat.getSeconds()< 10 ? "0" +(dateMat.getSeconds()) :dateMat.getSeconds();
    let timeFormat = year + dateSeprator + month + dateSeprator + day;
    if (timeSeprator) {
      timeFormat = timeFormat + " " + hh + timeSeprator + mm + timeSeprator + ss;
    }
    if (type == "year") {
      return year;
    } else if (type == "month") {
      return year + dateSeprator + month;
    }
    return timeFormat;
  }
}
//Base64Image
export function getBase64Image(img) {
  var w = 800
  imgWidth = img.width;
  imgHeight = img.height;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (Math.max(imgWidth, imgHeight) > w) {
   if (imgWidth > imgHeight) {
    canvas.width = w;
    canvas.height = w * imgHeight / imgWidth;
   } else {
    canvas.height = w;
    canvas.width = w * imgWidth / imgHeight;
   }
  } else {
   canvas.width = imgWidth;
   canvas.height = imgHeight;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  var dataUrl = canvas.toDataURL("image/png", 0.8);
  return dataUrl;
 }
// util.js
const that = {}
that.formatDateStr = function (date) {
  // eslint-disable-next-line one-var
  let MM = '', DD = ''
  if (date.getMonth() > 8) { MM = (date.getMonth() + 1).toString() } else { MM = '0' + (date.getMonth() + 1).toString() }
  if (date.getDate() > 9) { DD = date.getDate().toString() } else { DD = '0' + date.getDate().toString() }
  return date.getFullYear() + '-' + MM + '-' + DD
}
export default that