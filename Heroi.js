var nomeDoHeroi = "Pantera Negra"; 
var xpDoHeroi = 5900 ;


var nivelDoHeroi; 

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} 
else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} 
else if (xpDoHeroi >= 2001 && xpDoHeroi <= 3000) {
    nivelDoHeroi = "Prata";
} 
else if (xpDoHeroi >= 3001 && xpDoHeroi <= 4000) {
    nivelDoHeroi = "Ouro";
}
 else if (xpDoHeroi >= 5001 && xpDoHeroi <= 6000) {
    nivelDoHeroi = "Platina";
}
 else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ascendente";
} 
else if (xpDoHeroi >= 7001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Imortal";
} 
else {
    nivelDoHeroi = "Radiante";
}


console.log(`O nome do Herói é ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
