str = "";
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= i; j++) {
        str += j + "x" + i + "=" + (j * i) + "\t";
    }
    str += "\n";
} 
console.log(str);

