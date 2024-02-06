function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

// function calculateResult() {
//   try {
//     const result = eval(document.getElementById('display').value);
//     document.getElementById('display').value = result;
//   } catch (error) {
//     document.getElementById('display').value = 'Error';
//   }
// }
function calculateResult() {
  try {
    let input = document.getElementById('display').value;

    // Replace consecutive operators without operands
    input = input.replace(/(\+{2,}|-{2,}|\*{2,}|\/{2,})/g, (match) => {
      return match.charAt(0);
    });

    const result = eval(input);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

