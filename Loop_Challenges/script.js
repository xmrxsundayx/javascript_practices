// print odds 1-20

for (var i = 1; i<=20; i++) {
    if (i % 2 ==1) {
        console.log(i)
    }

}

// Decreasing Multiples of 3

for (var i= 100; i >= 0; i-=3) {
    console.log(i);
}

// print the sequence

for ( var i = 4; i > -4; i-=1.5) {
    console.log(i);
}

// sigma

var sum =0

for (var i = 1 ; i <= 100; i++) {
    var sum = sum += i;
    console.log(sum);
}

// factorial

var product = 1

for (var i = 1; i <= 12; i++) {
    var product = product * i;
    console.log(product);
}