// 01.개요 및 프로젝트 시작
console.log(123)


//02.정규식 생성
//생성자 함수방식
const regexp1 = new RegExp("^abc") //new RegExp(표현식)
const regexp2 = new RegExp("^abc","gi") //new RegExp(표현식,플래그)

//리터럴 방식
const regexp1L = /^abc/ // /표현식/
const regexp2L = /^abc/gi // /표현식/플래그

const str = `
010-2345-2312
wnsrn403@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 
hxypd`

//생성자 방식
const regexp = new RegExp('the','gi') 
// g플래그 : 표현식 모든 경우 검색 
// i플래그 : 대소문자 구분없애기

//리터럴 방식
const regexpL = /the/gi

console.log(str.match(regexp))
console.log(str.match(regexpL))


// 03.메소드
const regexpM = /fox/gi
console.log(regexpM.test(str)) // test 함수 사용 -> fox라는 단어가 str에 존재하여 true 반환
console.log(str.match(regexpM)) //match 함수 사용 -> fox 단어 str에 있는지 확인 후, 있다면 Array로 단어 반환
console.log(str.replace(regexpM,'bell')) //replace 함수 사용 -> str에 fox 단어를 bell로 변환


// 04.플래그(옵션)
const regexpF = /the/gi
console.log(str.match(regexpF))

// /the/ -> the가 있는 index 위치등 상세정보 Array로 표기
// /the/g -> [ the ] : the 문자 있으면 Array로 표기
// /the/gi -> [ The, the ] : 대소문자 구분없이 the 찾아서 Array로 표기

console.log(str.match(/\.$/gim)) 
// \.$ -> 문자열 끝에 마침표 검색을 위해선 이렇게 표기
// m 플래그를 이용하여, str 문자열, 줄바꿈 라인마다, 끝에 마침표 있는지 확인 ( ... dog. 이부분 찾음 )


// 05.패턴(표현)(1)
console.log(str.match(/d$/gm)) // ab$ : 줄 끝 일치 문자 찾기
console.log(str.match(/^t/gim)) // ^ab : 줄 시작 일치 문자 찾기

console.log(str.match(/h..p/g)) // . : 모든 임의의 글자 찾기
console.log(str.match(/fox|dog/g)) // a|b : a 또는 b 찾기 
console.log(str.match(/https?/g)) // ab? : b가 없거나 b와 일치하는것 찾기

console.log(str.match(/d{2}/g)) // b{숫자} : b를 숫자 개수 만큼 찾기
console.log(str.match(/d{2,}/g)) // b{숫자,} : b를 숫자 개수이상 만큼 찾기
console.log(str.match(/d{2,3}/g)) // b{숫자,숫자2} : b를 숫자 개수이상 숫자2 개수이하 만큼 찾기
console.log(str.match(/\b\w{2,3}\b/g)) // \b\w\b : 특수문자 앞뒤이나 뒤로 숫자만 혹은 알파벳만 되어있는 문자 확인 


// 06.패턴(표현)(2)
console.log(str.match(/[fox]/g)) // [fox] : f 또는 o 또는 x 문자 찾기
console.log(str.match(/[0-9]{1,}/g)) // 1개이상 되는 숫자 문자 찾기
console.log(str.match(/[가-힣]{1,}/g)) // 1개이상 되는 한글 문자 찾기

console.log(str.match(/\w/g)) // 숫자이거나 알파벳이거나 _ 인것 모두 찾기 
console.log(str.match(/\bf\w{1,}\b/g)) // 경계가 있는 f로 시작되는 영단어 찾기
console.log(str.match(/\d{1,}/g)) // 숫자 1개이상 찾기

const h = `  the hello  word    !   

`
console.log(h.match(/\s/g)) // 모든 줄바꿈, 띄어쓰기 공백 찾기
console.log(h.replace(/\s/g,'')) // 정규식 이용한 공백 제거 방법

console.log(str.match(/.{1,}(?=\@)/g)) // @문자 앞에 있는 모든 1개이상 문자 찾기
console.log(str.match(/(?<=\@).{1,}/g)) // @문자 뒤에 있는 모든 1개이상 문자 찾기