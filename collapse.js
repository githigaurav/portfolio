// Define a variable to store the fetched data
let caseStudyData = '';

// Fetch the data in the background when the page loads
window.addEventListener('DOMContentLoaded', () => {
  fetch('caseStudy.html')
    .then(response => response.text())
    .then(data => {
      caseStudyData = data;
    })
    .catch(error => console.log(error));
});


function displayhigaurav() {

      const targetDiv = document.getElementById('higaurav');
      const previousContent = targetDiv.innerHTML;  // Store the previous content
  
      const parser = new DOMParser();
      const sourceDoc = parser.parseFromString(caseStudyData, 'text/html');
      const divToFetch = sourceDoc.querySelector('#casehigaurav');

      targetDiv.innerHTML = divToFetch.innerHTML;

      // Add event listener to the close button
      const closeButton = targetDiv.querySelector('#closehigaurav');
      closeButton.addEventListener('click', () => {
  
       targetDiv.innerHTML = previousContent;  // Render the previous content
       hideDiv(targetDiv);
      });    
   
}

  
  
  function displayKhalsa () {
   
         const targetDiv = document.getElementById('khalsaCheritable');
         const previousContent = targetDiv.innerHTML;  // Store the previous content 
 
        const parser = new DOMParser();
        const sourceDoc = parser.parseFromString(caseStudyData, 'text/html');
        const divToFetch = sourceDoc.querySelector('#khalsaCaseData');
  
        targetDiv.innerHTML = divToFetch.innerHTML;
  
        // Add event listener to the close button
        const closeButton = targetDiv.querySelector('#closeCaseKhalsa');
        closeButton.addEventListener('click', () => {
        targetDiv.innerHTML = previousContent;  // Render the previous content
        hideDiv(targetDiv);
        });
  
        
  }
  
  function displayTranslator () {
        const targetDiv = document.getElementById('translator');
        const previousContent = targetDiv.innerHTML;  // Store the previous content
    
        const parser = new DOMParser();
        const sourceDoc = parser.parseFromString(caseStudyData, 'text/html');
        const divToFetch = sourceDoc.querySelector('#translatorCaseData');
  
        targetDiv.innerHTML = divToFetch.innerHTML;
  
        // Add event listener to the close button
        const closeButton = targetDiv.querySelector('#closeCaseKhalsa');
        closeButton.addEventListener('click', () => {
          targetDiv.innerHTML = previousContent;  // Render the previous content
          hideDiv(targetDiv);
        });
  
    
  }
  