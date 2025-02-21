document.getElementById('next-button').addEventListener('click', function() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('terminologies-section').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('terminologies-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
});