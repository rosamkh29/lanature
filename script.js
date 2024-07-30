console.log ("Salut" + name)
console.log ("Comment vas-tu" + name)
let prenom = prompt ("Bonjour, quel est ton prénom");
let nom = prompt ("Quel est ton nom de famille?");

let title = document.getElementById("welcometitle")

title.innerText = "Bienvenu dans la nature"+name; 

let isOK = prompt("ça va ou pas? répondre par oui ou non");

if ((isOK == "oui") || (isOK == "OUI") || (isOK == "Oui") || (isOK == "un peu") || (isOK == "un petit peu") || (isOK == "non ça va pas") || (isOK == "oui trés bien"))
{ 
//faire un truc
	console.log("l'utilisateur va bien")
}
else if (isOK == "non")
{
	//faire autre chose 
	console.log("l'utilisateur va mal")
}
else
{
	//faire un truc dans le cas ou l'utilisateur fait ce qu'il veut 
	console.log("l'utilisateur ne respecte pas la question")
}
