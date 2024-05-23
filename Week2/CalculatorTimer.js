// 계산기
function add() {
  const num1=parseFloat(document.getElementById('num1').value);
  const num2=parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `결과: ${num1 + num2}`;
}

function subtract() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `결과 : ${num1-num2}`;
}

function multiply() {
  const num1=parseFloat(document.getElementById('num1').value);
  const num2=parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `결과 : ${num1*num2}`;
}

function divide() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2=== 0) {
    document.getElementById('result').innerText = '오류: 0으로 나눌 수 없습니다.';
  } else {
    document.getElementById('result').innerText = `결과: ${num1 / num2}`;
  }
}

// 타이머
let intervalId;

function startTimer() {
  const seconds= parseInt(document.getElementById('seconds').value);
  if (isNaN(seconds) || seconds<= 0) {
    document.getElementById('timer').innerText= '오류: 유효한 시간을 입력하세요.';
    return;
  }

  let count= seconds;
  intervalId = setInterval(() => {
    document.getElementById('timer').innerText = `남은 시간: ${count}초`;
    count--;
    if (count < 0) {
      clearInterval(intervalId);
      document.getElementById('timer').innerText = '시간 종료';
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  document.getElementById('timer').innerText = '타이머 정지';
}
