document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // You can add login validation here if needed
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (basic)
    if (username && password) {
        // Redirect to home page
        window.location.href = 'C:\Users\offic\Downloads\Expense-Tracker-Using-HTML-CSS-JS-main (2)\Expense-Tracker-Using-HTML-CSS-JS-main\index.html'; // Change this URL to your home page
    } else {
        alert('Please enter both username and password');
    }
});