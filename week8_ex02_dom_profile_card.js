// Dynamic Profile Card - DOM interactions
const profileCard = document.getElementById('profileCard');
const profileImage = document.getElementById('profileImage');
const profileName = document.getElementById('profileName');
const profileRole = document.getElementById('profileRole');
const updateNameBtn = document.getElementById('updateNameBtn');
const updateRoleBtn = document.getElementById('updateRoleBtn');
const toggleStatusBtn = document.getElementById('toggleStatusBtn');
const changeImageBtn = document.getElementById('changeImageBtn');

updateNameBtn.addEventListener('click', () => {
	const newName = prompt('Enter a new name for the profile:', profileName.textContent);
	if (newName !== null && newName.trim() !== '') {
		profileName.textContent = newName.trim();
	}
});

updateRoleBtn.addEventListener('click', () => {
	const newRole = prompt('Enter a new role for the profile:', profileRole.textContent);
	if (newRole !== null && newRole.trim() !== '') {
		profileRole.textContent = newRole.trim();
	}
});

toggleStatusBtn.addEventListener('click', () => {
	profileCard.classList.toggle('active-status');
});

changeImageBtn.addEventListener('click', () => {
	const newUrl = prompt('Enter a new image URL:', profileImage.src);
	if (newUrl !== null && newUrl.trim() !== '') {
		profileImage.src = newUrl.trim();
	}
});

// Optional: keyboard accessibility - Enter triggers Update Name when focused
updateNameBtn.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') updateNameBtn.click();
});
