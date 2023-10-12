function* generatePrimes(limit) {
    if (limit < 2) {
    return;
    }
    yield 2; // 2 is the first prime number
    for (let number = 3; number <= limit; number += 2) {
    let isPrime = true;
    for (let divisor = 3; divisor <= Math.sqrt(number); divisor
    += 2) {
    if (number % divisor === 0) {
    isPrime = false;
    break;
    }
    }
    if (isPrime) {
    yield number;
    }
    }
    }
    // Example: Generate prime numbers up to a specified limit (e.g.,
    // 20)
    const limit = 20;
    const primeGenerator = generatePrimes(limit);
    for (const prime of primeGenerator) {
    console.log(prime);
    }