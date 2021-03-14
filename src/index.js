
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(matrix){
    let result =[]
    matrix.forEach((element,index) => {

      let el= index%2==0?element:element.reverse()
      result.push(...el)
      });
    return result
    }
    {
        return []
    }
}
