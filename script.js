document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');
    const gridContainer = document.querySelector('.grid-container');
    let selectedCourse = null; // Para la lógica de selección y deselección

    // --- Funciones de Utilidad ---

    // Obtener el estado de los cursos desde localStorage
    const getApprovedCourses = () => {
        const approvedCoursesJSON = localStorage.getItem('approvedCourses');
        return approvedCoursesJSON ? JSON.parse(approvedCoursesJSON) : {};
    };

    // Guardar el estado de los cursos en localStorage
    const saveApprovedCourses = (approvedCourses) => {
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
    };

    // Obtener prerrequisitos de un curso
    const getCoursePrerequisites = (courseElement) => {
        const prereqString = courseElement.dataset.prerequisites;
        return prereqString ? prereqString.split(',').map(id => id.trim()) : [];
    };

    // Verificar si un curso tiene todos sus prerrequisitos aprobados
    const arePrerequisitesMet = (courseElement, approvedCourses) => {
        const prereqIds = getCoursePrerequisites(courseElement);
        if (prereqIds.length === 0) {
            return true; // No tiene prerrequisitos, siempre está disponible
        }
        return prereqIds.every(id => approvedCourses[id]);
    };

    // --- Renderizado y Lógica de Estado ---

    const updateCourseStates = () => {
        const approvedCourses = getApprovedCourses();

        courses.forEach(course => {
            const courseId = course.id;

            // Limpiar clases de estado previas
            course.classList.remove('approved', 'locked', 'unlocked', 'selected', 'prerequisite-of-selected', 'dependency-of-selected');

            if (approvedCourses[courseId]) {
                course.classList.add('approved');
            } else {
                if (arePrerequisitesMet(course, approvedCourses)) {
                    course.classList.add('unlocked');
                } else {
                    course.classList.add('locked');
                }
            }
        });
    };

    // --- Manejo de Eventos ---

    courses.forEach(course => {
        course.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague al gridContainer

            const courseId = course.id;
            let approvedCourses = getApprovedCourses();

            // Lógica de "aprobar"
            if (course.classList.contains('unlocked')) {
                // Si está desbloqueado, lo aprobamos
                approvedCourses[courseId] = true;
                saveApprovedCourses(approvedCourses);
                updateCourseStates(); // Volver a renderizar para actualizar todos los estados
                selectedCourse = null; // Deseleccionar después de aprobar
            } else if (course.classList.contains('approved')) {
                // Si ya está aprobado, no hacemos nada más que quizá deseleccionar si se hizo clic de nuevo.
                // Podrías añadir lógica aquí para "desaprobar" si lo deseas, pero ten cuidado con las dependencias.
                 if (selectedCourse === course) {
                    selectedCourse = null; // Deseleccionar si se vuelve a clickear el mismo aprobado
                    updateCourseStates(); // Limpiar resaltados
                } else {
                    // Si se selecciona un curso ya aprobado, se muestra la selección y se resaltan dependencias/prerrequisitos.
                    courses.forEach(c => c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected'));
                    course.classList.add('selected');
                    selectedCourse = course;
                    highlightDependencies(course);
                }

            } else if (course.classList.contains('locked')) {
                // Si está bloqueado, solo lo seleccionamos y mostramos sus prerrequisitos
                courses.forEach(c => c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected'));
                course.classList.add('selected');
                selectedCourse = course;
                highlightDependencies(course);
            }
        });
    });

    // Lógica para resaltar prerrequisitos y dependencias
    const highlightDependencies = (currentSelectedCourse) => {
        // Limpiar resaltados previos (excepto 'approved', 'locked', 'unlocked')
        courses.forEach(c => {
            if (!c.classList.contains('approved') && !c.classList.contains('locked') && !c.classList.contains('unlocked')) {
                c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected');
            }
        });

        // Asegurarse de que el curso seleccionado tiene la clase 'selected'
        if (currentSelectedCourse) {
            currentSelectedCourse.classList.add('selected');

            // Resaltar prerrequisitos del curso seleccionado
            const prereqIds = getCoursePrerequisites(currentSelectedCourse);
            prereqIds.forEach(prereqId => {
                const prereqCourse = document.getElementById(prereqId);
                if (prereqCourse && !prereqCourse.classList.contains('approved')) {
                    prereqCourse.classList.add('prerequisite-of-selected');
                }
            });

            // Resaltar cursos que tienen como prerrequisito al curso seleccionado
            courses.forEach(otherCourse => {
                if (otherCourse !== currentSelectedCourse && !otherCourse.classList.contains('approved')) {
                    const otherPrereqIds = getCoursePrerequisites(otherCourse);
                    if (otherPrereqIds.includes(currentSelectedCourse.id)) {
                        otherCourse.classList.add('dependency-of-selected');
                    }
                }
            });
        }
    };


    // Deseleccionar al hacer clic fuera de una asignatura (en el contenedor principal)
    gridContainer.addEventListener('click', () => {
        courses.forEach(c => c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected'));
        selectedCourse = null;
        updateCourseStates(); // Revertir los colores de estado si se quitaron por la selección
    });

    // --- Botón de Reinicio (Opcional, pero muy útil para pruebas) ---
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar Malla';
    resetButton.style.cssText = `
        padding: 10px 20px;
        background-color: var(--pastel-purple);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Quicksand', sans-serif;
        font-size: 1em;
        margin-top: 20px;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    `;
    resetButton.addEventListener('mouseover', () => {
        resetButton.style.backgroundColor = '#9A80C5'; // Un poco más oscuro en hover
        resetButton.style.transform = 'translateY(-2px)';
    });
    resetButton.addEventListener('mouseout', () => {
        resetButton.style.backgroundColor = 'var(--pastel-purple)';
        resetButton.style.transform = 'translateY(0)';
    });

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso en la malla?')) {
            localStorage.removeItem('approvedCourses');
            updateCourseStates();
            alert('Progreso reiniciado.');
        }
    });
    document.body.insertBefore(resetButton, gridContainer); // Inserta el botón antes de la malla

    // --- Inicialización ---
    updateCourseStates(); // Establecer los estados iniciales al cargar la página
});
