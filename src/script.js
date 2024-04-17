function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree < 0) {
    return 1 / pow(num, -degree);
  } else {
    return num * pow(num, degree - 1);
  }
}

function showPow() {
  const num = document.getElementById("number").value;
  const degree = document.getElementById("degree").value;
  const result = pow(Number(num), Number(degree));
  document.getElementById("result").innerText = `Результат: ${result}`;
}
