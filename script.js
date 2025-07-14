// Datos completos de la malla curricular
const curriculumData = [
  // Semestre 1
  {
    semester: 1,
    courses: [
      { name: "ORIENTACIÓN FARMACÉUTICA I", credits: 2, requisites: [] },
      { name: "FÍSICA APLICADA II", credits: 3, requisites: [] },
      { name: "MATEMÁTICA APLICADA I", credits: 3, requisites: [] },
      { name: "BIOLOGÍA I", credits: 3, requisites: [] },
      { name: "QUÍMICA BÁSICA", credits: 6, requisites: [] },
      { name: "BOTÁNICA APLICADA I", credits: 2, requisites: [] }
    ]
  },
  // Semestre 2
  {
    semester: 2,
    courses: [
      { name: "ORIENTACIÓN FARMACÉUTICA II", credits: 2, requisites: ["ORIENTACIÓN FARMACÉUTICA I"] },
      { name: "FÍSICA APLICADA II", credits: 3, requisites: ["FÍSICA APLICADA II (1er sem)"] },
      { name: "MATEMÁTICA APLICADA II", credits: 3, requisites: ["MATEMÁTICA APLICADA I"] },
      { name: "BIOLOGÍA II", credits: 3, requisites: ["BIOLOGÍA I"] },
      { name: "QUÍMICA BÁSICA II", credits: 6, requisites: ["QUÍMICA BÁSICA"] },
      { name: "BOTÁNICA APLICADA II", credits: 2, requisites: ["BOTÁNICA APLICADA I"] }
    ]
  },
  // Semestre 3
  {
    semester: 3,
    courses: [
      { name: "Estudio y Comprensión del Hombre", credits: 2, requisites: [] },
      { name: "Química Inorgánica I", credits: 3, requisites: ["QUÍMICA BÁSICA II"] },
      { name: "Química Orgánica I", credits: 4, requisites: ["QUÍMICA BÁSICA II"] },
      { name: "Análisis Químico I", credits: 5, requisites: ["QUÍMICA BÁSICA II"] },
      { name: "Fisicoquímica I", credits: 3, requisites: ["FÍSICA APLICADA II"] },
      { name: "FISIOLOGÍA y ANATOMÍA I", credits: 3, requisites: ["BIOLOGÍA II"] },
      { name: "Parasitología", credits: 2, requisites: ["BIOLOGÍA II"] },
      { name: "Estadística I", credits: 2, requisites: ["MATEMÁTICA APLICADA II"] },
      { name: "Atención Farmacéutica I", credits: 2, requisites: ["ORIENTACIÓN FARMACÉUTICA II"] }
    ]
  },
  // Semestre 4
  {
    semester: 4,
    courses: [
      { name: "Química Inorgánica II", credits: 3, requisites: ["Química Inorgánica I"] },
      { name: "Química Orgánica II", credits: 5, requisites: ["Química Orgánica I"] },
      { name: "Análisis Químico II", credits: 6, requisites: ["Análisis Químico I"] },
      { name: "Fisicoquímica II", credits: 3, requisites: ["Fisicoquímica I"] },
      { name: "Fisiología y Anatomía II", credits: 3, requisites: ["FISIOLOGÍA y ANATOMÍA I"] },
      { name: "Estadística II", credits: 2, requisites: ["Estadística I"] },
      { name: "Metodología de la Investigación", credits: 2, requisites: ["Estadística I"] },
      { name: "Atención Farmacéutica II", credits: 2, requisites: ["Atención Farmacéutica I"] }
    ]
  },
  // Semestre 5
  {
    semester: 5,
    courses: [
      { name: "Química Medicinal I", credits: 3, requisites: ["Química Orgánica II"] },
      { name: "Análisis Instrumental I", credits: 3, requisites: ["Análisis Químico II"] },
      { name: "Fisiopatología I", credits: 3, requisites: ["Fisiología y Anatomía II"] },
      { name: "Salud Pública I", credits: 2, requisites: ["Parasitología"] },
      { name: "Bioquímica I", credits: 3, requisites: ["Fisicoquímica II"] },
      { name: "Farmacotecnia I", credits: 3, requisites: ["Atención Farmacéutica II"] },
      { name: "Legislación Farmacéutica I", credits: 2, requisites: [] },
      { name: "Diseño de Proyectos I", credits: 2, requisites: ["Estadística II"] }
    ]
  },
  // Semestre 6
  {
    semester: 6,
    courses: [
      { name: "Química Medicinal II", credits: 3, requisites: ["Química Medicinal I"] },
      { name: "Análisis Instrumental II", credits: 3, requisites: ["Análisis Instrumental I"] },
      { name: "Fisiopatología II", credits: 3, requisites: ["Fisiopatología I"] },
      { name: "Salud Pública II", credits: 2, requisites: ["Salud Pública I"] },
      { name: "Bioquímica II", credits: 3, requisites: ["Bioquímica I"] },
      { name: "Farmacotecnia II", credits: 3, requisites: ["Farmacotecnia I"] },
      { name: "Legislación Farmacéutica II", credits: 2, requisites: ["Legislación Farmacéutica I"] },
      { name: "Diseño de Proyectos II", credits: 2, requisites: ["Diseño de Proyectos I"] }
    ]
  },
  // Semestre 7
  {
    semester: 7,
    courses: [
      { name: "Microbiología I", credits: 3, requisites: ["Salud Pública II"] },
      { name: "Farmacología I", credits: 3, requisites: ["Fisiopatología II"] },
      { name: "Toxicología I", credits: 3, requisites: ["Bioquímica II"] },
      { name: "Farmacognosis I", credits: 3, requisites: ["Química Medicinal II"] },
      { name: "Biofarmacia I", credits: 3, requisites: ["Análisis Instrumental II"] },
      { name: "Procesos Unitarios I", credits: 3, requisites: ["Análisis Instrumental II"] },
      { name: "Higiene y Seguridad Industrial I", credits: 2, requisites: [] },
      { name: "Economía Aplicada", credits: 2, requisites: [] },
      { name: "Orientación Pasantías Oficina de Farmacia", credits: 2, requisites: ["Farmacotecnia II"] }
    ]
  },
  // Semestre 8
  {
    semester: 8,
    courses: [
      { name: "Microbiología II", credits: 3, requisites: ["Microbiología I"] },
      { name: "Farmacología II", credits: 3, requisites: ["Farmacología I"] },
      { name: "Toxicología II", credits: 3, requisites: ["Toxicología I"] },
      { name: "Farmacognosis II", credits: 3, requisites: ["Farmacognosis I"] },
      { name: "Biofarmacia II", credits: 3, requisites: ["Biofarmacia I"] },
      { name: "Procesos Unitarios II", credits: 3, requisites: ["Procesos Unitarios I"] },
      { name: "Higiene y Seguridad Industrial II", credits: 2, requisites: ["Higiene y Seguridad Industrial I"] },
      { name: "Administración Aplicada", credits: 2, requisites: ["Economía Aplicada"] },
      { name: "Pasantías I Oficina de Farmacia", credits: 2, requisites: ["Orientación Pasantías Oficina de Farmacia"] }
    ]
  },
  // Semestre 9
  {
    semester: 9,
    courses: [
      { name: "Primeros Auxilios I", credits: 3, requisites: ["Toxicología II"] },
      { name: "Farmacoterapéutica I", credits: 2, requisites: ["Farmacología II"] },
      { name: "Bromatología", credits: 3, requisites: ["Microbiología II"] },
      { name: "Farmacotecnia III", credits: 3, requisites: ["Procesos Unitarios II"] },
      { name: "Dermocosmética I", credits: 3, requisites: ["Farmacognosis II"] },
      { name: "Mercadotecnia I", credits: 2, requisites: [] },
      { name: "Técnicas Gerenciales I", credits: 2, requisites: ["Administración Aplicada"] },
      { name: "Seminario Trabajo Especial de Grado I", credits: 2, requisites: ["Diseño de Proyectos II"] },
      { name: "Orientación Pasantías Industriales-Empresas", credits: 2, requisites: ["Pasantías I Oficina de Farmacia"] },
      { name: "Farmacia Hospitalaria I", credits: 2, requisites: ["Farmacología II"] }
    ]
  },
  // Semestre 10
  {
    semester: 10,
    courses: [
      { name: "Primeros Auxilios II", credits: 3, requisites: ["Primeros Auxilios I"] },
      { name: "Farmacoterapéutica II", credits: 2, requisites: ["Farmacoterapéutica I"] },
      { name: "Bromatología II", credits: 3, requisites: ["Bromatología"] },
      { name: "Farmacotecnia IV", credits: 3, requisites: ["Farmacotecnia III"] },
      { name: "Dermocosmética II", credits: 3, requisites: ["Dermocosmética I"] },
      { name: "Mercadotecnia II", credits: 2, requisites: ["Mercadotecnia I"] },
      { name: "Técnicas Gerenciales II", credits: 2, requisites: [] },
      { name: "Seminario Trabajo Especial de Grado II", credits: 2, requisites: ["Seminario Trabajo Especial de Grado I"] },
      { name: "Trabajo Especial de Grado", credits: 2, requisites: ["Seminario Trabajo Especial de Grado II"] },
      { name: "Pasantías II Industriales-Empresas", credits: 2, requisites: ["Orientación Pasantías Industriales-Empresas"] },
      { name: "Farmacia Hospitalaria II", credits: 2, requisites: ["Farmacia Hospitalaria I"] }
    ]
  }
];

// Función para generar la malla curricular
function generateCurriculum() {
  const container = document.getElementById('semestersContainer');
  container.innerHTML = '';
  
  curriculumData.forEach(semesterData => {
    const semesterDiv = document.createElement('div');
    semesterDiv.className = 'semester';
    
    const title = document.createElement('h3');
    title.textContent = `${semesterData.semester}º semestre`;
    semesterDiv.appendChild(title);
    
    semesterData.courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'course';
      
      const nameDiv = document.createElement('div');
      nameDiv.className = 'course-name';
      nameDiv.textContent = course.name;
      
      const creditsSpan = document.createElement('span');
      creditsSpan.className = 'course-credits';
      creditsSpan.textContent = `${course.credits} créditos`;
      
      const reqDiv = document.createElement('div');
      reqDiv.className = 'course-req';
      reqDiv.textContent = course.requisites.length > 0 ? 
        `Requisitos: ${course.requisites.join(', ')}` : 'No tiene requisitos';
      
      courseDiv.appendChild(nameDiv);
      courseDiv.appendChild(creditsSpan);
      courseDiv.appendChild(reqDiv);
      
      // Agregar evento click para mostrar detalles
      courseDiv.addEventListener('click', () => {
        showCourseDetails(course.name, course.credits, semesterData.semester, reqDiv.textContent);
      });
      
      semesterDiv.appendChild(courseDiv);
    });
    
    container.appendChild(semesterDiv);
  });
}

// Función para mostrar detalles del curso en modal
function showCourseDetails(name, credits, semester, requisites) {
  const modal = document.getElementById('courseModal');
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalCredits').textContent = credits;
  document.getElementById('modalSemester').textContent = `${semester}º semestre`;
  
  const reqDiv = document.getElementById('modalRequisites');
  if (requisites && requisites !== 'No tiene requisitos') {
    reqDiv.innerHTML = `<strong>${requisites}</strong>`;
  } else {
    reqDiv.innerHTML = '<strong>No tiene requisitos</strong>';
  }
  
  modal.style.display = 'block';
  
  // Cerrar modal al hacer clic en la X
  document.getElementsByClassName('close')[0].onclick = function() {
    modal.style.display = 'none';
  }
  
  // Cerrar modal al hacer clic fuera
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

// Función para buscar cursos
function searchCourses() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const courses = document.getElementsByClassName('course-name');
  
  for (let i = 0; i < courses.length; i++) {
    const courseName = courses[i].textContent || courses[i].innerText;
    const courseDiv = courses[i].parentElement;
    
    if (courseName.toUpperCase().indexOf(filter) > -1) {
      courseDiv.style.display = "";
      
      // Resaltar texto coincidente
      if (filter !== '') {
        const regex = new RegExp(filter, 'gi');
        courses[i].innerHTML = courseName.replace(regex, match => `<span class="highlight">${match}</span>`);
      } else {
        courses[i].innerHTML = courseName;
      }
    } else {
      courseDiv.style.display = "none";
    }
  }
}

// Función para filtrar por semestre
function filterSemesters(semester) {
  const semesters = document.getElementsByClassName('semester');
  const buttons = document.getElementsByClassName('filter-btn');
  
  // Actualizar botones activos
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.includes(semester) || (semester === 'all' && buttons[i].textContent === 'Todos')) {
      buttons[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
    }
  }
  
  // Mostrar/ocultar semestres
  for (let i = 0; i < semesters.length; i++) {
    const semNumber = semesters[i].querySelector('h3').textContent.match(/\d+/)[0];
    if (semester === 'all' || semNumber === semester) {
      semesters[i].style.display = 'block';
    } else {
      semesters[i].style.display = 'none';
    }
  }
}

// Inicializar la malla al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  generateCurriculum();
  
  // Configurar evento para el buscador si existe
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', searchCourses);
  }
  
  // Configurar eventos para los botones de filtro si existen
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    const semester = button.textContent.includes('Todos') ? 'all' : 
                    button.textContent.match(/\d+/)[0];
    button.addEventListener('click', () => filterSemesters(semester));
  });
});
