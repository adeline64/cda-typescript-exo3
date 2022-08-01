import { Budget } from "./budget";
export class Adherent {
    //données
    private id : string;
    private nom: string;
    private prenom : string;
    private budget : Budget;
    private telephone : string;
    private email : string;
    private password : string | undefined;


    //constructor 
    constructor(nom: string, prenom: string) {
        this.id = Date.now.toString()
        this.nom = nom;
        this.prenom = prenom
        this.budget = new Budget(900,[])
        this.telephone = "telephone"
        this.email = "email"
        this.password = "password"
    }
    

    create(){
        const buttonSave = document.getElementById("btnSave") as HTMLButtonElement
        buttonSave.addEventListener("click", function() {
            // Récupération des champs
            var nom = (document.getElementById("formSaveNom") as HTMLInputElement).value
            var prenom = (document.getElementById("formSavePrenom") as HTMLInputElement).value
            var telephone = (document.getElementById("formSaveTelephone") as HTMLInputElement).value
            var email = (document.getElementById("formSaveEmail") as HTMLInputElement).value
            var password = (document.getElementById("formSavePassword") as HTMLInputElement).value

            // var prenom = document.getElementById("formSavePrenom")?.value;
            // const telephone = document.getElementById("formSaveTelephone")?.value;
            // const email = document.getElementById("formSaveEmail")?.value;
            // var password = document.getElementById("formSavePassword")?.value;
          
            if (nom && prenom && telephone && email && password) {
              // Nouvelle personne
              const movie = { nom: nom, prenom: prenom, telephone: telephone, email: email, password: password };
          
              // Ajout de la nouvelle personne
              const movies = [];
              movies.push(movie);

              // enregistrement ds localStorage
              localStorage.setItem("user",JSON.stringify(this))

            }else{
                alert("Désolé mais impossible de vous inscrire")
            }
        });
    }

    read(){

    }
    
    update(){

    }

    delete(){
        const buttonSupprimer = document.getElementById("supprimer") as HTMLButtonElement
        buttonSupprimer.addEventListener("click", function() {
            delete.buttonSupprimer
        });
    }

    voirBudget(){
        return this.budget.GetBudget()
    }

    public ModifierArgent(somme:number,ajout:boolean, nom:string = "", cate:string = "Aucune"){
        
        const retur = this.budget.ModifierArgent(somme,ajout,nom,cate)
        localStorage.setItem("user",JSON.stringify(this))

        return retur
    }

    connexion(){
        const buttonConnect = document.getElementById("connect") as HTMLButtonElement
        buttonConnect.addEventListener("click", function() {
            // Récupération des champs
            var email = (document.getElementById("Email") as HTMLInputElement).value
            var password = (document.getElementById("Password") as HTMLInputElement).value
            if (email && password) {
              // personne connecter
              const movie = { email: email, password: password };
          
             //connexion de la nouvelle personne


            }else{
                alert("Désolé mais impossible de vous connecter")
            }
        });
    }
    
}