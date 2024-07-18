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

document.addEventListener('DOMContentLoaded', function() {
  const components = {
      "GroundedTheory": {
          "Key Characteristics": "● GT focuses on social experiences\n● Contributes to the development of middle-range theories.\n● GT theories are grounded in data\n● GT is suited to research about which very little is known.\n● GT is an appropriate approach to explore many health-related research questions.",
          "Theoretical Sampling": "The process of data collection, and deciding what data to collect based on the theory and categories that emerge from your data.",
          "Theoretical Sensitivity": "Facilitates insight into what is meaningful and of significance in the data for theory development. Professional background, knowledge and experience can help researchers are helpful in developing sensitivity to the research topic.",
          "Theoretical Saturation": "It is the last component to be taken into account when integrating theory. It is described as the stage in which no new categories are created and all additional data is gathered within already established categories.",
          "Coding": "A process of systematically labelling, organising and categorising qualitative excerpts to identify themes and patterns.",
          "Constant Comparison": "An analytic technique in which information obtained from data collection is constantly compared with emerging categories and concepts.",
          "Memo Writing": "Memos are written records of a researcher's ideas, reflections, and thoughts on the research process. Memos offer a record of the researchers' analytical decisions and logistical information regarding their research activities."
      },
      "Phenomenology": {
          "Key Characteristics": "● Focuses on lived experiences\n● Examines how things present themselves to us through experiences\n● Emphasizes subjective interpretations and perceptions",
          "Positionality": "The researcher's acknowledgement and consideration of their own subjectivity, background, beliefs, and perspectives in the research process. Positionality influences the way a researcher approaches and interprets the data.",
          "Reflexivity": "The researcher's continuous process of self-awareness and self-reflection. To make sure that one's own prejudices, beliefs, and presumptions do not unnecessarily affect how participants' experiences are interpreted, it requires ongoing self-examination.",
          "Bracketing": "Used by researchers to temporarily suspend or set aside their preconceptions and biases, allowing them to focus solely on the phenomena as experienced by participants.",
          "Hermeneutic Circle": "An iterative process where the researcher continually moves between the parts and the whole, refining the analysis to gain a deeper understanding of the phenomenon."
      },
      "Ethnography": {
          "Key Characteristics": "● In-depth study of specific cultural groups or communities\n● Provides holistic and context-rich perspectives\n● Involves immersion in the field\n● Focuses on understanding culture, behaviors, beliefs, and social dynamics",
          "Participant Observation": "Ethnographers actively participate in the social activities and events of the community they are studying. They observe and interact with community members, building relationships and trust over time.",
          "Fieldwork": "Ethnographic research typically involves fieldwork, which can last from several weeks to many years, depending on the research objectives. During fieldwork, researchers live among the people they are studying and immerse themselves in the culture.",
          "Key informants": "Integral to the success of ethnographic research, as they provide valuable insights and information about the culture, community, or social setting being studied. These individuals are typically well-informed, respected, and knowledgeable members of the community."
      }
  };

  function updateDescription(method, componentName) {
      const descriptionElement = document.getElementById(`${method.toLowerCase()}Description`);
      if (descriptionElement) {
          descriptionElement.innerHTML = `
              <h3 class="w3-text-${method === 'GroundedTheory' ? 'red' : method === 'Phenomenology' ? 'blue' : 'green'}">${componentName}</h3>
              <p>${components[method][componentName].replace(/\n/g, '<br>')}</p>
          `;
      }
  }

  document.querySelectorAll('.component').forEach(component => {
      component.addEventListener('click', () => {
          const method = component.closest('.method').id;
          const componentName = component.getAttribute('data-component');
          updateDescription(method, componentName);
          
          component.closest('.method').querySelectorAll('.component').forEach(c => c.classList.remove('active'));
          component.classList.add('active');
      });
  });

  window.openMethod = function(evt, methodName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("method");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
      }
      document.getElementById(methodName).style.display = "block";
      evt.currentTarget.className += " w3-red";
      
      // Update description for the first (Key Characteristics) component
      updateDescription(methodName, "Key Characteristics");
  }

  // Initialize descriptions
  updateDescription("GroundedTheory", "Key Characteristics");
});