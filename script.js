document.getElementById('shortForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const videoUrl = document.getElementById('videoUrl').value;
  const title = document.getElementById('videoTitle').value;
  const music = document.getElementById('music').value;

  // Simulación de generación
  document.getElementById('result').style.display = 'block';
  alert("La versión real pronto usará IA para generar el short automáticamente.");
});
