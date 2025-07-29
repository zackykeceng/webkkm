
function showModal(nama, divisi, bio, instagram) {
  document.getElementById('modal-nama').textContent = nama;
  document.getElementById('modal-divisi').textContent = divisi;
  document.getElementById('modal-bio').textContent = bio;
  const igLink = document.getElementById('modal-instagram');
  igLink.href = instagram;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
