//your JS code here. If required.
const dialog = document.getElementById('myDialog');

  document.getElementById('openBtn').addEventListener('click', () => {
    dialog.showModal();   
  });

  document.getElementById('closeBtn').addEventListener('click', () => {
    dialog.close();
  });