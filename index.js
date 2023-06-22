let score = 0

const homeScore = document.querySelector('#home-score')
const homeAdd1Btn = document.querySelector('.home #add-one')
const homeAdd2Btn = document.querySelector('.home #add-two')
const homeAdd3Btn = document.querySelector('.home #add-three')
const awayScore = document.getElementById('away-score')

const addPoints = numberOfPoints => {
  if(numberOfPoints === 1) {
    score += 1
  } else if (numberOfPoints === 2){
    score += 2
  } else if (numberOfPoints === 3){
    score += 3
  }
}


console.log(homeAdd1Btn)

// function homeAdd1() {
//   homeCount += 1
//   homeScore.textContent = homeCount
// }
// function homeAdd2() {
//   homeCount += 2
//   homeScore.textContent = homeCount
// }
// function homeAdd3() {
//   homeCount += 3
//   homeScore.textContent = homeCount
// }
// function awayAdd1() {
//   awayCount += 1
//   awayScore.textContent = awayCount
// }

// function awayAdd2() {
//   awayCount += 2
//   awayScore.textContent = awayCount
// }
// function awayAdd3() {
//   awayCount += 3
//   awayScore.textContent = awayCount
// }
