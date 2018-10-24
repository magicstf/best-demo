
/**
 * 根据身份证号码获取年龄
 * @param {字符串 身份证号码} identityCard 
 */

export function GetAge(identityCard) {
  var len = (identityCard + "").length;
  if (len == 0) {
      return 0;
  } else {
      if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
      {
          return 0;
      }
  }
  var strBirthday = "";
  if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
  {
      strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
  }
  if (len == 15) {
      strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
  }
  //时间字符串里，必须是“/”
  var birthDate = new Date(strBirthday);
  var nowDateTime = new Date();
  var age = nowDateTime.getFullYear() - birthDate.getFullYear();
  //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

/**
 * 溢出显示...
 * @param {字符串 需要截取的字符串} str 
 * @param {数值 需要截取的长度} len 
 * @param {布尔 是否显示...} hasDot 
 */
export function subString(str, len, hasDot) {
  str = str.replace(/&nbsp;/g, ' ');
  var newLength = 0;
  var newStr = "";
  var chineseRegex = /[^\x00-\xff]/g;
  var singleChar = "";
  var strLength = str.replace(chineseRegex, "**").length;
  for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) != null) {
          newLength += 2;
      } else {
          newLength++;
      }
      if (newLength > len) {
          break;
      }
      newStr += singleChar;
  }
  if (hasDot && strLength > len) {
      newStr += "...";
  }
  return newStr;
};

/**
 * 定时器
 */
export function timer(code,millisec,count) {
    if(count === 1){
        setTimeout(code,millisec);
    } else {
        setInterval(code,millisec);
    }
}

/**
 * 清除定时器
 */
export function clearTimer(timerName) {
    clearInterval(timerName);
}

/**
 * 倒计时
 */
export function countDown(time) {

}

/**
 * 从cookie中获取特定字段值
 *
 * @export
 * @param {*} name
 * @returns
 */
export function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (name == arr[0]) {
            return arr[1];
        }
    }
    return "";
}

/**
 * 将传入的时间戳转换为对应的时间格式 "2018-09-25 16:32:54"
 * @param {需要转换的时间戳} time 
 */
export function getTime(time) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
}
