// Function to fetch and insert HTML content
function loadComponent(url, elementId) {
  fetch(url)
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Inject the fetched HTML into the specified element
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading component from ${url}:`, error);
      // Optionally, you could insert an error message into the placeholder
      document.getElementById(elementId).innerHTML = `<p>Error loading content.</p>`;
    });
}

// Use DOMContentLoaded to make sure the placeholders exist before we try to fill them
document.addEventListener("DOMContentLoaded", function() {
  // Load the header
  loadComponent('https://cdn.jsdelivr.net/gh/phi-kit/CDN@v1.0.16/content/html/_navigation.html', 'navigation-placeholder');

  // Lead the footer
  loadComponent('https://cdn.jsdelivr.net/gh/phi-kit/CDN@v1.0.16/content/html/_footer.html', 'footer-placeholder');
});