"use strict";
exports.__esModule = true;
var budget_1 = require("./budget");
var Adherent = /** @class */ (function () {
    //constructor 
    function Adherent(nom, prenom) {
        this.id = Date.now.toString();
        this.nom = nom;
        this.prenom = prenom;
        this.budget = new budget_1.Budget(900, []);
        this.telephone = "telephone";
        this.email = "email";
        this.password = "password";
    }
    Adherent.prototype.create = function () {
        var buttonSave = document.getElementById("btnSave");
        buttonSave.addEventListener("click", function () {
            // Récupération des champs
            var nom = document.getElementById("formSaveNom").value;
            var prenom = document.getElementById("formSavePrenom").value;
            var telephone = document.getElementById("formSaveTelephone").value;
            var email = document.getElementById("formSaveEmail").value;
            var password = document.getElementById("formSavePassword").value;
            // var prenom = document.getElementById("formSavePrenom")?.value;
            // const telephone = document.getElementById("formSaveTelephone")?.value;
            // const email = document.getElementById("formSaveEmail")?.value;
            // var password = document.getElementById("formSavePassword")?.value;
            if (nom && prenom && telephone && email && password) {
                // Nouvelle personne
                var movie = { nom: nom, prenom: prenom, telephone: telephone, email: email, password: password };
                // Ajout de la nouvelle personne
                var movies = [];
                movies.push(movie);
            }
            else {
                alert("Désolé mais impossible de vous inscrire");
            }
        });
    };
    Adherent.prototype.read = function () {
    };
    Adherent.prototype.update = function () {
    };
    Adherent.prototype["delete"] = function () {
        var buttonSupprimer = document.getElementById("supprimer");
        buttonSupprimer.addEventListener("click", function () {
            delete .buttonSupprimer;
        });
    };
    Adherent.prototype.voirBudget = function () {
        return this.budget.GetBudget();
    };
    Adherent.prototype.ModifierArgent = function (somme, ajout, nom, cate) {
        if (nom === void 0) { nom = ""; }
        if (cate === void 0) { cate = "Aucune"; }
        var retur = this.budget.ModifierArgent(somme, ajout, nom, cate);
        localStorage.setItem("user", JSON.stringify(this));
        return retur;
    };
    Adherent.prototype.connexion = function () {
        var buttonConnect = document.getElementById("connect");
        buttonConnect.addEventListener("click", function () {
            // Récupération des champs
            var email = document.getElementById("Email").value;
            var password = document.getElementById("Password").value;
            if (email && password) {
                // personne connecter
                var movie = { email: email, password: password };
                //connexion de la nouvelle personne
            }
            else {
                alert("Désolé mais impossible de vous connecter");
            }
        });
    };
    return Adherent;
}());
exports.Adherent = Adherent;
