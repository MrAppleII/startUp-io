package java_namer;
import java.util.Random;
import java.util.stream.IntStream;

import  java_namer.*;

public class StartupName {
    private String startupName = null;

    StartupName(String normalName) {
        startupName = transform(normalName);
    }

    StartupName() {
        startupName = "";
    }

    private String transform(String input) {
        String output = "";
        
        char[] chars = input.toCharArray();

        output += chars[0];

        // remove vowels from middle of word
        for (int i = 1; i < chars.length-1; i++) {
            if (!isVowel(chars[i]))
                output += chars[i];
        }

        output += chars[chars.length - 1];

        // if it doesn't end in 'r', then append ".io"
        if (!output.endsWith("r")) {
            output += randSuffix();
        }

        return output;
    }

    public String toString() {
        return startupName;
    }

    private boolean isVowel(char ch) {
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
    }

    private String randSuffix() {
        String[] suffixes = {"", ".io", ".ly", ".tv", "athon"};
        Random random = new Random();
        return suffixes[random.nextInt(suffixes.length)];
    }
}

