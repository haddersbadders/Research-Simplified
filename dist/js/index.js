// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Accordion 

function accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Matrix

function openMatrix(matrixname) {
  var i;
  var x = document.getElementsByClassName("matrix");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(matrixname).style.display = "block";
}


function openCr(evt, crName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("cr");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(crName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


function openQualRes(qualResName) {
  var i;
  var x = document.getElementsByClassName("qualres");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(qualResName).style.display = "block";
}

function openQuantRes(quantResName) {
  var i;
  var x = document.getElementsByClassName("quantres");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(quantResName).style.display = "block";
}


// interactive theory components

const components = {
  'Theoretical Sampling': 'The process of data collection, deciding what data to collect based on the theory and categories that emerge from your data.',
  'Theoretical Sensitivity': 'Facilitates insight into what is meaningful and of significance in the data for theory development. Professional background, knowledge and experience can help researchers develop sensitivity to the research topic.',
  'Theoretical Saturation': 'The stage in which no new categories are created and all additional data is gathered within already established categories.',
  'Coding': 'A process of systematically labelling, organising and categorising qualitative excerpts to identify themes and patterns.',
  'Constant Comparison': 'An analytic technique in which information obtained from data collection is constantly compared with emerging categories and concepts.',
  'Memo Writing': 'Written records of a researcher\'s ideas, reflections, and thoughts on the research process. Memos offer a record of the researchers\' analytical decisions and logistical information regarding their research activities.'
};

      const componentElements = document.querySelectorAll('.component');
      const descriptionElement = document.getElementById('description');

      function updateDescription(componentName) {
          descriptionElement.innerHTML = `
              <h3>${componentName}</h3>
              <p>${components[componentName]}</p>
          `;
      }

      componentElements.forEach(component => {
          component.addEventListener('click', () => {
              const componentName = component.getAttribute('data-component');
              updateDescription(componentName);
              
              componentElements.forEach(c => c.classList.remove('active'));
              component.classList.add('active');
          });
      });

      // Set initial selection to Theoretical Sampling
      updateDescription("Theoretical Sampling");