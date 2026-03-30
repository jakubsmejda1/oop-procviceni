class BankovniUcet{
    //datové složky
    cisloUctu;
    majitel;
    zustatek;
    historiePohybu;

    //constructor
    constructor(majitel, cisloUctu, pocatecniVklad) {
        this.cisloUctu = cisloUctu;
        this.majitel = majitel;
        this.historiePohybu = ["Počáteční vklad " + pocatecniVklad];
        if (pocatecniVklad < 0) {
            throw new Error("Nesmí být záporný vklad!");
        } else {
            this.zustatek = pocatecniVklad;
        }
    }
    
    //metody
    zjistiZustatek() {
        return this.zustatek;
    }
    vklad(castka) {
        if (castka <= 0) {
            throw new Error(`${this.majitel}: Částka musí být kladná!`);
        }
        this.zustatek += castka;
        this.historiePohybu.push("Vklad " + castka);
    }
    vyber(castka) {
        if (castka <= 0) {
            throw new Error(`${this.majitel}: Částka musí být kladná!`);
        } else if (castka > this.zustatek) {
            throw new Error(`${this.majitel}: Nepovolené přečerpání!`);
        }
        this.zustatek -= castka;
        this.historiePohybu.push("Výběr " + castka);
    }
    historie() {
        //return this.historiePohybu.join(", ");
        let vypis = `${this.majitel} - historie pohybů:\n`;
        for (let i = 0; i < this.historiePohybu.length; i++) {
            vypis += this.historiePohybu[i] + "\n";
        }
        return `${vypis}zůstatek: ${this.zustatek}`;
    }
};

// Vytvoření účtů
var ucet1 = new BankovniUcet("Jan Vopěnka", 10001, 100);
var ucet2 = new BankovniUcet("Martina Vopěnková", 10002, 100);

// Operace s účty
try {
    ucet1.vklad(1000);
    ucet2.vklad(1000);
} catch (error) {
    console.log(error.message); //v TS je to (error as Error).message
}
// Výpis zůstatků
console.log(ucet1.zjistiZustatek());
console.log(ucet2.zjistiZustatek());
console.log(ucet1.historie());
console.log(ucet2.historie());