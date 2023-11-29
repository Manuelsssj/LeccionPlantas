class Planta {
    // Lista única para almacenar instancias de la clase Planta
    private static listaPlantas: Planta[] = [];

    // Atributos de la clase Planta
    public nombre: string;
    public tipo: string;
    public altura: number;

    // Constructor privado para evitar la creación directa de instancias
    private constructor(nombre: string, tipo: string, altura: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.altura = altura;
    }

    // Método estático para crear una nueva instancia y agregarla a la lista
    static crearPlanta(nombre: string, tipo: string, altura: number): Planta {
        const nuevaPlanta = new Planta(nombre, tipo, altura);
        Planta.listaPlantas.push(nuevaPlanta);
        return nuevaPlanta;
    }

    // Método estático para mostrar los datos de todas las plantas en la lista
    static mostrarPlantas(): void {
        console.log("Datos de todas las plantas:");
        for (const planta of Planta.listaPlantas) {
            console.log(`Nombre: ${planta.nombre}, Tipo: ${planta.tipo}, Altura: ${planta.altura}`);
        }
    }
}

// Crear instancias de la clase Planta utilizando el método estático
const planta1 = Planta.crearPlanta("Rosa", "Flor", 30);
const planta2 = Planta.crearPlanta("Pino", "Árbol", 200);
const planta3 = Planta.crearPlanta("Cactus", "Suculenta", 10);

// Mostrar los datos de todas las plantas utilizando el método estático
Planta.mostrarPlantas();
