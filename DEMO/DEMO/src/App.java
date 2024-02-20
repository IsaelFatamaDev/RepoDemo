import java.util.Scanner;

import javax.swing.JOptionPane;

public class App {
    public static void main(String[] args) {
        String nombre = JOptionPane.showInputDialog("Por favor, introduce tu nombre:");
        String number = JOptionPane.showInputDialog("Ingresa un numero: ");
        String numer2 = JOptionPane.showInputDialog("Ingresa un segundo numero: ");
        int numero1 = Integer.parseInt(number);
        int numero2 = Integer.parseInt(numer2);
        int suma = numero1 + numero2;

        JOptionPane.showMessageDialog(null, "Hola, " + nombre + "!");
        JOptionPane.showMessageDialog(null, "La suma de los numeros es: " + suma);

    }
}
