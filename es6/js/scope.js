for(var i=0; i<10; i++) {
    console.log(i);
}

console.log("out of loop: " + i); //Here i is 10 as scope of i is not limited in for loop


for(let j=0; j<10; j++) {
    console.log(j);
}

console.log("out of loop: " + j); //Here j is not defined as scope of j is limited in for loop