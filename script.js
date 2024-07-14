//your JS code here. If required.

 function toUpperCaseOnBlur() {
            var inputField = document.getElementById('fname');
            inputField.addEventListener('blur', function() {
                inputField.value = inputField.value.toUpperCase();
            });
        }

        // Call the function when the DOM is fully loaded
        window.onload = function() {
            toUpperCaseOnBlur();
        }
