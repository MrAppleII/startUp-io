package namer;

import java.io.IOException;
import java.util.Scanner;

import  namer.*;

public class Renamer {
    static StartupName name = null;

    public static void main(String[] args) {
        for (String arg : args) {
            name = new StartupName(arg);
            System.out.println(name.toString());
        }

        Scanner input = new Scanner(System.in);
        while (input.hasNext()) {
            String line = input.nextLine();
            System.out.print(line + " | ");
            System.out.println(new StartupName(line));
        }
        input.close();
    }
}
