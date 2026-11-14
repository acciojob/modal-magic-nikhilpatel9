 const dialog  = document.getElementById('myDialog');
    const openBtn = document.getElementById('openBtn');

    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dialog.showModal();
    });

    // Close on clicks INSIDE the dialog (bubbles to document)
    document.addEventListener('click', () => {
      if (dialog.open) dialog.close();
    });

    // Close on BACKDROP clicks (these don't bubble to document)
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();  // backdrop target = dialog itself
    });
  </script>