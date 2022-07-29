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
        this.telephone = telephone;
        this.email = "email";
        this.password = password;
    }
    Adherent.prototype.create = function () {
        document.getElementById("formSave").addEventListener("click", function () {
            // Récupération des champs
            var nom = document.getElementById("nom").value;
            var prenom = document.getElementById("prenom").value;
            var telephone = document.getElementById("telephone").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            if (nom && prenom && telephone && email && password) {
                // Nouvelle ligne
                var movie = { email: email, password: password };
                // Ajout de la nouvelle ligne
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
    };
    return Adherent;
}());
exports.Adherent = Adherent;
