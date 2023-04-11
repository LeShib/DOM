// let learners = ["Abel Fortunati", "Anthony Denayer", "Bruno Lafont","Delphine Lecorney","Emilien Volkaert","Ethen Dias Marques","Julien Arnould","Louka Cadau","Nikko Di Bernardo","Willy Seghers","Alexandra Petit","Benjamin Mayeur","Ismaël Mesmoudi","Jodie Addis","Loïc Lion","Luciano Ciarrocchi","Marine Fassin","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas M"];

// let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// let article = document.querySelector('article');

// for(l of learners){
//     let newSection = document.createElement('section');
//     let randomColor = "rgb("+rand(0, 256)+","+rand(0, 256)+","+rand(0, 256)+")";
//     newSection.style.background = randomColor;

//     let luminosity = (0.299 * parseInt(randomColor.substr(1,2), 16)) + (0.587 * parseInt(randomColor.substr(3,2), 16)) + (0.114 * parseInt(randomColor.substr(5,2), 16));
//     newSection.style.color = (luminosity > 128) ? 'black' : 'white';
//     let para = document.createElement('p');
//     para.textContent = l;
//     newSection.appendChild(para);
//     article.appendChild(newSection);
// }


const groupMembers = ["Abel Fortunati", "Anthony Denayer", "Bruno Lafont","Delphine Lecorney","Emilien Volkaert","Ethen Dias Marques","Julien Arnould","Louka Cadau","Nikko Di Bernardo","Willy Seghers","Alexandra Petit","Benjamin Mayeur","Ismaël Mesmoudi","Jodie Addis","Loïc Lion","Luciano Ciarrocchi","Marine Fassin","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas M"];

const article = document.querySelector('article');

groupMembers.forEach(member => {
  // crée un élément section
  const section = document.createElement('section');
  
  // génère une couleur de fond aléatoire
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  section.style.backgroundColor = randomColor;
  
  // détermine la couleur de texte en fonction de la luminosité de la couleur de fond
  const luminosity = (0.299 * parseInt(randomColor.substr(1,2), 16)) + (0.587 * parseInt(randomColor.substr(3,2), 16)) + (0.114 * parseInt(randomColor.substr(5,2), 16));
  section.style.color = (luminosity > 128) ? 'black' : 'white';
  
  // crée un élément paragraphe pour le nom de l'apprenant
  const para = document.createElement('p');
  para.textContent = member;
  
  // ajoute le paragraphe à la section
  section.appendChild(para);
  
  // ajoute la section à l'article
  article.appendChild(section);
});