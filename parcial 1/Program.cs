
namespace ALUMNOS
{
    internal class Program
    {

        static void Main(string[] args)
        {
            Profesor profesor1 = new Profesor();

            profesor1.Ingreso();              
            profesor1.ImprimirDatosProfesor();



        }
    }

       
        public class Profesor 
        {
            public string nombre;
            public string apellido;
            public string salon;
            public string materia;
            public int numeroEmpleado;

        public void Ingreso()
        {
            Console.WriteLine("Ingresa el nombre del profesor:");
            nombre = Console.ReadLine();

            Console.WriteLine("Ingresa el apellido del profesor:");
            apellido = Console.ReadLine();

            Console.WriteLine("Ingresa el salon del profesor:");
            salon = Console.ReadLine();

            Console.WriteLine("Ingresa la materia:");
            materia = Console.ReadLine();

            Console.WriteLine("Ingresa el número de empleado:");
            numeroEmpleado = int.Parse(Console.ReadLine());
        }


        public void ImprimirDatosProfesor()
            {
                Console.WriteLine("///////////////////////////////////////////");
                Console.WriteLine("Nombre: " + nombre + " " + apellido);
                Console.WriteLine("salon: " + salon);
                Console.WriteLine("Materia: " + materia);
                Console.WriteLine("Número de empleado: " + numeroEmpleado);
               
            }
            }
    }

