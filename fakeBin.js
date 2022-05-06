function fakeBin(x){
  let newArr = []
    let y = x.split('')
    for (let i = 0; i < y.length; i++){
      if (y[i] < 5){
        newArr.push(0)
      }else{
        newArr.push(1)
      }
    }
    return newArr.join('')
}
