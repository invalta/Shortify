document.querySelectorAll('.use-template').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const hooks = [
      'Voz IA + subtítulos grandes',
      'Pantalla dividida: cara y reacción',
      'Zoom rápido + música energética'
    ];
    const musics = ['dramatic', 'energetic', 'epic'];
    document.getElementById('videoTitle').value = hooks[i];
    document.getElementById('music').value = musics[i];
    document.getElementById('videoUrl').focus();
    alert('Plantilla aplicada: puedes pegar tu video ahora.');
  });
});

document.getElementById('proToggle').addEventListener('click', () => {
  const plans = document.getElementById('proPlans');
  plans.style.display = plans.style.display === 'none' ? 'block' : 'none';
});
