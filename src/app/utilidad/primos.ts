export function generarPrimos(limit: number): boolean[] {
    const sieve = Array(limit).fill(true);
    sieve[0] = sieve[1] = false; // 0 y 1 no son primos
  
    for (let i = 2; i * i < limit; i++) {
      if (sieve[i]) {
        for (let j = i * i; j < limit; j += i) {
          sieve[j] = false;
        }
      }
    }
    return sieve;
  }
  
  export function esPrimoCircular(num: number, primos: boolean[]): boolean {
    const digitos = num.toString().split('');
    for (let i = 0; i < digitos.length; i++) {
      const rotation = parseInt(digitos.join(''), 10);
      if (!primos[rotation]) return false;
      digitos.push(digitos.shift()!); // Rota los dígitos
    }
    return true;
  }
  
  export function encontrarPrimosCirculares(limit: number): number[] {
    const primos = generarPrimos(limit);
    const PrimosCirculares: number[] = [];
  
    for (let i = 2; i < limit; i++) {
      if (primos[i] && esPrimoCircular(i, primos)) {
        PrimosCirculares.push(i);
      }
    }
  
    return PrimosCirculares;
  }
