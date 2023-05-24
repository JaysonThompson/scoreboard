let homeCount = 0
let awayCount = 0

let homeScore = document.getElementById('home-score')
let awayScore = document.getElementById('away-score')

function homeAdd1() {
  homeCount += 1
  homeScore.textContent = homeCount
}
function homeAdd2() {
  homeCount += 2
  homeScore.textContent = homeCount
}
function homeAdd3() {
  homeCount += 3
  homeScore.textContent = homeCount
}
function awayAdd1() {
  awayCount += 1
  awayScore.textContent = awayCount
}

function awayAdd2() {
  awayCount += 2
  awayScore.textContent = awayCount
}
function awayAdd3() {
  awayCount += 3
  awayScore.textContent = awayCount
}
