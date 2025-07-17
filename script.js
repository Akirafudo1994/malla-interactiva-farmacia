document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');
    const gridContainer = document.querySelector('.grid-container');
    let selectedCourse = null;

    courses.forEach(course => {
        course.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague al gridContainer

            // Limpiar clases de todas las asignaturas
            courses.forEach(c => {
                c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected');
            });

            if (selectedCourse === course) {
                // Si se hizo clic en la misma asignatura, deseleccionar
                selectedCourse = null;
            } else {
                // Seleccionar la nueva asignatura
                course.classList.add('selected');
                selectedCourse = course;

                // Resaltar prerrequisitos
                const prerequisites = course.dataset.prerequisites;
                if (prerequisites) {
                    const prereqIds = prerequisites.split(',').map(id => id.trim());
                    prereqIds.forEach(prereqId => {
                        const prereqCourse = document.getElementById(prereqId);
                        if (prereqCourse) {
                            prereqCourse.classList.add('prerequisite-of-selected');
                        }
                    });
                }

                // Resaltar asignaturas que dependen de la seleccionada
                courses.forEach(otherCourse => {
                    if (otherCourse !== course && otherCourse.dataset.prerequisites) {
                        const otherPrereqIds = otherCourse.dataset.prerequisites.split(',').map(id => id.trim());
                        if (otherPrereqIds.includes(course.id)) {
                            otherCourse.classList.add('dependency-of-selected');
                        }
                    }
                });
            }
        });
    });

    // Deseleccionar al hacer clic fuera de una asignatura
    gridContainer.addEventListener('click', () => {
        courses.forEach(c => {
            c.classList.remove('selected', 'prerequisite-of-selected', 'dependency-of-selected');
        });
        selectedCourse = null;
    });
});
