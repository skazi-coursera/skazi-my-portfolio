// Task 7 & 9: Add Recommendation and Show Pop-up
document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('rec-name').value;
    const text = document.getElementById('rec-text').value;
    const list = document.getElementById('recommendation-list');
    const newRec = document.createElement('div');
    newRec.className = 'recommendation';
    newRec.innerHTML = `<p>"${text}" – ${name}</p>`;
    list.appendChild(newRec);
	confirm("Recommendation submitted successfully!");
    document.getElementById('recommendation-form').reset();
});
