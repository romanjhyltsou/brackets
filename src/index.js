module.exports = function check(str, bracketsConfig) {

  let bracketsArrToStr = bracketsConfig.join('').replace(/,/g, ''); // преобразовать массив в строку и убираем точки
  let sArr = [];

  for (let bracket of str) {


      let bracketsIn = bracketsArrToStr.indexOf(bracket);


      if (bracketsIn % 2 === 0) {
          
          if (bracket === bracketsArrToStr[bracketsIn + 1] && sArr[sArr.length - 1] === bracketsIn){
              sArr.pop();
          } else if (bracket === bracketsArrToStr[bracketsIn + 1] && sArr[sArr.length - 1] !== bracketsIn) {
              sArr.push(bracketsIn);
          }
          else{
              sArr.push(bracketsIn);
          }

      }else {
          if (sArr.pop() !== bracketsIn -1){
            return false;
          }
      }
      
  }
  return sArr.length === 0;
};
