function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar caracteres no alfabéticos
    const palabraLimpia = palabra.toLowerCase().replace(/[^a-z]/g, '');
    const palabraRevertida = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === palabraRevertida;
}
console.log(esPalindromo("A man, a plan, a canal, Panama")); // Salida: true
console.log(esPalindromo("palindromo")); // Salida: false