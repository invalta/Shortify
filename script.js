document.getElementById('shortForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const videoUrl = document.getElementById('videoUrl').value;
  const title = document.getElementById('videoTitle').value;
  const music = document.getElementById('music').value;

  document.getElementById('result').style.display = 'block';
  alert("Short generado (simulación). Próximamente con IA real.");
});
