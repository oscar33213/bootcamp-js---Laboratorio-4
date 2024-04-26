class Clinica {
    constructor() {
        this.turno = 0;
    }

    // Función para avanzar al siguiente turno
    siguienteTurno() {
        this.turno++;
    }

    // Función para retroceder al turno anterior
    anteriorTurno() {
        if (this.turno > 0) {
            this.turno--;
        }
    }

    // Función para restablecer el turno a 0
    resetearTurno() {
        this.turno = 0;
    }

    // Función para cambiar el turno a un valor especificado
    cambiarTurno(valor) {
        this.turno = valor;
    }

    // Función para formatear el turno a dos dígitos
    formatearTurno() {
        return this.turno.toString().padStart(2, '0');
    }

    // Función para mostrar el estado actual del turno por consola
    mostrarTurno() {
        console.log(`Turno actual: ${this.formatearTurno()}`);
    }
}

// Crear una instancia de la clínica
const clinica = new Clinica();

// Función para simular la interfaz de usuario
function interfazUsuario() {
    console.log("--- Clínica ---");
    clinica.mostrarTurno();
    console.log("1. Siguiente turno");
    console.log("2. Turno anterior");
    console.log("3. Resetear turno");
    console.log("4. Cambiar turno manualmente");
    console.log("0. Salir");
}

// Ciclo principal del programa
let opcion;
do {
    interfazUsuario();
    opcion = parseInt(prompt("Ingrese una opción:"));

    switch (opcion) {
        case 1:
            clinica.siguienteTurno();
            break;
        case 2:
            clinica.anteriorTurno();
            break;
        case 3:
            clinica.resetearTurno();
            break;
        case 4:
            const nuevoTurno = parseInt(prompt("Ingrese el nuevo turno:"));
            clinica.cambiarTurno(nuevoTurno);
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida. Inténtelo de nuevo.");
    }
} while (opcion !== 0);


