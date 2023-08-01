const display = document.getElementById('display');
        let currentCalculation = '';

        function updateDisplay() {
            display.textContent = currentCalculation || '0';
        }

        function appendNumber(number) {
            currentCalculation += number;
            updateDisplay();
        }

        function appendOperator(operator) {
            currentCalculation += ' ' + operator + ' ';
            updateDisplay();
        }

        function appendDecimal() {
            if (!currentCalculation.includes('.')) {
                currentCalculation += '.';
            }
            updateDisplay();
        }

        function toggleSign() {
            if (currentCalculation.startsWith('-')) {
                currentCalculation = currentCalculation.slice(1);
            } else {
                currentCalculation = '-' + currentCalculation;
            }
            updateDisplay();
        }

        function deleteLast() {
            currentCalculation = currentCalculation.slice(0, -1);
            updateDisplay();
        }

        function clearDisplay() {
            currentCalculation = '';
            updateDisplay();
        }

        function calculate() {
            try {
                const result = Function('"use strict";return (' + currentCalculation + ')')();
                currentCalculation = String(result);
                updateDisplay();
            } catch (error) {
                currentCalculation = '';
                updateDisplay();
                console.error('Error occurred while calculating:', error);
            }
        }

        updateDisplay();