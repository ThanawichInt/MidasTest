// console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));

// console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));

// function getQuestionPart(phrases: string[]): string {
//     let questionPart = "";
//     for(let i = 1; i < phrases.length;i++){
//         let j = 0
//        while(j < phrases[0].length){
//         console.log(j);
        
//         j++;
//        }
//     }
//     return questionPart;
// }

// export default getQuestionPart;

function getQuestionPart(phrases: string[]): string[] {
    const prevWord: string[] = [];
    const duplicated: string[] = [];
    const tempDuplicated: string[] = [];
    const answers: string[] = [];
    let prevLen = 0;
    const charCountFirst: { [char: string]: number } = {};
    const charCurrentFirst: { [char: string]: number } = {};
    const charCountSecond: { [char: string]: number } = {};
    const charCurrentSecond: { [char: string]: number } = {};
  
    for (let i = 0; i < phrases.length; i++) {
      const word = phrases[i];
  
      if (i === 0) {
        for (const char of word) {
            prevWord.push(char);
            charCountFirst[char] = (charCountFirst[char] || 0) + 1; 
        }
      } else if (i === 1) {
        for (const char of word) {
            if (prevWord.slice(0, prevLen).includes(char)) {
                charCurrentFirst[char] = (charCurrentFirst[char] || 0) + 1;
                if (charCountFirst[char] >= charCurrentFirst[char]) {
                    tempDuplicated.push(char);
                }
            }
        }
      } else if (i === 2) {
            for (const char of word) {
                if (tempDuplicated.includes(char)) {
                    charCurrentSecond[char] = (charCurrentSecond[char] || 0) + 1;
                    if (charCountSecond[char] >= charCurrentSecond[char]) { 
                        duplicated.push(char);
                    }
                }
            }
      }
      for (const char of tempDuplicated){
        charCountSecond[char] = (charCountSecond[char] || 0) + 1;
      }
      prevLen += word.length;
    }
    const uniqueWord = duplicated.join('');
    for (const word of phrases) {
      answers.push(word.replace(uniqueWord, '').replace(/\s/g, '')); 
    }
    return answers;
  }
  
export default getQuestionPart;