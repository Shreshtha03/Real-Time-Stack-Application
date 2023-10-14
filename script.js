var stack = [];

        function pushItem() {
            var item = document.getElementById('itemInput').value;
            if (item) {
                stack.push(item);
                displayStack();
                document.getElementById('itemInput').value = '';
            }
        }

        function popItem() {
            if (stack.length > 0) {
                stack.pop();
                displayStack();
            }
        }

        function displayStack() {
            var stackContainer = document.getElementById('stackContainer');
            stackContainer.innerHTML = '';
            for (var i = stack.length - 1; i >= 0; i--) {
                var div = document.createElement('div');
                div.textContent = stack[i];
                div.className = 'stackItem';
                stackContainer.appendChild(div);
            }
        }