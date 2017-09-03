const lamboPriceUSD = 443800;

export class Totals {
  usd: number = 0;
  btc: number = 0;
  pln: number = 0;
  lambo: number = 0;

  calculateLamboPercent() {
    this.lambo = this.usd / lamboPriceUSD;
  }
}
