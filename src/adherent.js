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
            var _a, _b, _c, _d, _e;
            // Récupération des champs
            var nom = (_a = document.getElementById("formSaveNom")) === null || _a === void 0 ? void 0 : _a.value;
            var prenom = (_b = document.getElementById("formSavePrenom")) === null || _b === void 0 ? void 0 : _b.value;
            var telephone = (_c = document.getElementById("formSaveTelephone")) === null || _c === void 0 ? void 0 : _c.value;
            var email = (_d = document.getElementById("formSaveEmail")) === null || _d === void 0 ? void 0 : _d.value;
            var password = (_e = document.getElementById("formSavePassword")) === null || _e === void 0 ? void 0 : _e.value;
            if (nom && prenom && telephone && email && password) {
                // Nouvelle personne
                var movie = { nom: nom, prenom: prenom, telephone: telephone, email: email, password: password };
                // Ajout de la nouvelle personne
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
