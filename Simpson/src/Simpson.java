
public class Simpson {
    // VISIBLE A NIVEL DE LA CLASE SIMPSON
   static char[][] tablero = new char [10][10]; // (0 A N-1)((VA DE 0 A 9))
    // FIN

    // Software de gestión de venta ONLINE
    public static void rellenarTablero(char pers){
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                tablero[i][j] = pers;

            }

        }
    }
    public static void imprimirTablero(){
        for (int i = 0; i < 10; i++) {
            System.out.println(" ");
            for (int j = 0; j < 10; j++) {
               System.out.print(tablero[i][j]);
            }
        }
    }
    public static void main(String[] args) {
        // Press Alt+Intro with your caret at the highlighted text to see how
        // IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");
                            // int contador = 0;
        char personaje = '#';
        personaje = 'V';
        rellenarTablero(personaje);
        imprimirTablero();
        System.out.println("");
        personaje = 'H';
        rellenarTablero(personaje);
        imprimirTablero();
        // for ()
    }
}