export const isReverse = ( word, removeWord ) => {
    const revWord = word.split('').reverse().join().replace(/,/g,'') 
    return word != removeWord && removeWord != revWord
 }

 export const replaceWord = ( word ) =>  {
     return word.split('').reverse().join().replace(/,/g,'')
 }

 export const reverseWord = ( word, removeWord) => {
    const reverseWord = word.split(' ')
    let tempIndex
    reverseWord.forEach( (el, idx) => {
        if(removeWord){
            if( isReverse( el ,removeWord) ){
                reverseWord[idx] = replaceWord(el)
            } else{
                tempIndex = idx
            }
        } else{ 
            reverseWord[idx] = replaceWord(el)
        }
    })

    tempIndex &&  delete reverseWord[tempIndex]
    
    return reverseWord.join().replace(/,/g,' ')
}


const x = reverseWord('test')
console.log( x ) 