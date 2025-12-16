
const list = document.getElementById("jednotka"); //proměnná list slouží na výběr jednotky


document.addEventListener('keypress', e => {		// poslouchá na klávesový stisk
  if (event.key === 'Enter') {						// v případě že byl stisklá klávesa Enter
	Eval();											// tak spustí funkci Eval()
  }
});

// Evaluate - vyhodnotit
// účel funkce je zkontrolovat jestli uživatel nedal do pole slovo nebo nenechal pole prázdný

function Eval() {	
			const conv = parseFloat(document.getElementById("conv").value);			// proměnná conv(ert) bere z id conv (pole na hodnoty)

				if (Number.isNaN(conv)) {											// Kontrola jestli hodnota není NaN 
					document.getElementById("res").innerHTML = "";						// V případě že hodnota je NaN tak vymaž všechny údaje v res (vkládá do HTML stránky)
					window.alert("Napište hodnotu do pole!");							// a napíš chybu
				/*} else if (conv < 0) {				 							// kontrola jestli hodnota není menší než 0 (deaktivováno - důvod: teploty)
					document.getElementById("res").innerHTML = "Nelze vypočítat";		// v případě že hodnota je menší než 0 tak do res napiš "nelze vypočítat"
					window.alert("Napište kladnou hodnotu do pole!");*/					// a napiš chybu
				} else {
					calc();			//v případě že se splní podmínky spusť funkci calc()
				}	
		}
		
// Calculate - Vypočítat
// zjišťuje jakou jednotku uživatel vybral a poté vypočítá

function calc() {														
	let index = list.selectedIndex;			// proměnná index, který bere z proměnné list sice není potřebný, ale byl zanechán kvůli čitelnosti
	
		switch(index){ 		// switch který bere z proměnné index
			case 0:			// vybírá "in -> cm"
				in2cm();	// vyvolá příslušnou funkci v tomto případě "in2cm()"
			break;
			case 1:			// vybírá "cm -> in"
				cm2in();
			break;
			case 2:			// vybírá "°C -> °F"
				C2F();
			break;
			case 3:			// vybírá "°F -> °C"
				F2C();
			break;
		}
			
	}
	
function in2cm() { 	// Funkce na převod z palců na cm
			const conv = parseFloat(document.getElementById("conv").value);  // proměnná conv(ert) bere z id conv (pole na hodnoty)
				
				if (conv < 0) {														// kontrola jestli proměnná conv se nerovná 0	 
					document.getElementById("res").innerHTML = "Nelze vypočítat";		// v případě že hodnota je menší než 0 tak do res napiš "nelze vypočítat"
					window.alert("Napište kladnou hodnotu do pole!");					// a napiš chybu
				} else {															// v případě že se splní podmínky vypočítej
					const result = conv * 2.54;										// násobí vstup s číslem 2,54
					document.getElementById("res").innerHTML = conv+" in"+" je "+result+" cm"; // vloží výsledek do HTML stránky ve formátu: <vstup> in je <výsledek> cm
				}
		}
			
function cm2in() { 
			const conv = parseFloat(document.getElementById("conv").value); // ditto
				
				if (conv < 0) {				 
					document.getElementById("res").innerHTML = "Nelze vypočítat";
					window.alert("Napište kladnou hodnotu do pole!");
				} else {					
					const pre_res = conv / 2.54; 					// dělí vstup s číslem 2,54
					const result = pre_res.toFixed(2);				// zaokrouhlí na 2 desetinná čísla
					document.getElementById("res").innerHTML = conv+" cm"+" je "+result+" in"; // vloží výsledek do HTML stránky ve formátu: <vstup> cm je <výsledek> in
				}
		}

function C2F() {
			const conv = parseFloat(document.getElementById("conv").value); // ditto
			const pre_res = (conv * 1.8) + 32;				// násobí vstup 1,8 a přičte 32
			const result = pre_res.toFixed(1);				// zaokrouhlí na 1 desetiné čísla
			document.getElementById("res").innerHTML = conv+"°C"+" je "+result+"°F";	// vloží výsledek do HTML stránky ve formátu: <vstup> °C je <výsledek> °F
		}

function F2C() {
			const conv = parseFloat(document.getElementById("conv").value); //ditto
			const pre_res = (conv - 32) * 5 / 9;			// odečítá 32 a násobí 5/9
			const result = pre_res.toFixed(2);				// zaokrouhlí na 2 desetinná čísla
			document.getElementById("res").innerHTML = conv+"°F"+" je "+result+"°C";	// vloží výsledek do HTML stránky ve formátu: <vstup> °F je <výsledek> °C	
		}