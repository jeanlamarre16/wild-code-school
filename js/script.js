

/* On récupère la valeur des différents champs pour être sûr que le formulaire a bien été rempli
avant son envoi */

document.formContact.addEventListener('submit', function(evt) {
  if (evt.currentTarget.name.value == "") {
      alert("Vous devez renseigner votre nom.");
      document.formContact.name.focus();
      evt.preventDefault();
  } else if (evt.currentTarget.email.value == "") {
    alert("Le champ email est obligatoire.");
    document.formContact.email.focus();
    evt.preventDefault();
  } else if (evt.currentTarget.message.value == "") {
    alert("Oups ! Le champ message n'a pas été renseigné.");
    document.formContact.message.focus();
    evt.preventDefault();
  } else {  
    alert("Merci ! Votre message a bien été envoyé.");
  }
});

