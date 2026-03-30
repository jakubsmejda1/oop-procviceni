class BankovniUcet{
    //datové složky
    #cisloUctu;
    #majitel;
    #zustatek;
    #historiePohybu;

    //constructor
    constructor(majitel, pocatecniVklad) {
        this.#cisloUctu = Math.floor(Math.random() * 10000000000) + "/3230";
        this.#majitel = majitel;
        this.#historiePohybu = ["Počáteční vklad " + pocatecniVklad];
        if (pocatecniVklad < 0) {
            throw new Error("Nesmí být záporný vklad!");
        } else {
            this.#zustatek = pocatecniVklad;
        }
    }
    
    //metody
    zjistiZustatek() {
        return this.#zustatek;
    }
    vklad(castka) {
        if (castka <= 0) {
            throw new Error(`${this.#majitel}: Částka musí být kladná!`);
        }
        this.#zustatek += castka;
        this.#historiePohybu.push("Vklad " + castka);
    }
    vyber(castka) {
        if (castka <= 0) {
            throw new Error(`${this.#majitel}: Částka musí být kladná!`);
        } else if (castka > this.#zustatek) {
            throw new Error(`${this.#majitel}: Nepovolené přečerpání!`);
        }
        this.#zustatek -= castka;
        this.#historiePohybu.push("Výběr " + castka);
    }
    historie() {
        //return this.#historiePohybu.join(", ");
        let vypis = `${this.#majitel} (${this.#cisloUctu}) - historie pohybů:\n`;
        for (let i = 0; i < this.#historiePohybu.length; i++) {
            vypis += this.#historiePohybu[i] + "\n";
        }
        return `${vypis}zůstatek: ${this.#zustatek}`;
    }
};
class SporiciUcet extends BankovniUcet {
    //datové složky
    #urokovaSazba;
    //constructor
    constructor(majitel, pocatecniVklad, urokovaSazba) {
        super(majitel, pocatecniVklad);
        this.#urokovaSazba = urokovaSazba;
    }
    //metody
    
}


// Vytvoření účtů
var ucet1 = new BankovniUcet("Jan Vopěnka", 100);
var ucet2 = new BankovniUcet("Martina Vopěnková", 100);
const ucetS1 = new SporiciUcet("Petr Spořitel", 500, 4.01);

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
console.log(ucetS1.historie())
