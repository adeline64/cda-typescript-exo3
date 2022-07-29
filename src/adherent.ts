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
            var nom = document.getElementById("formSaveNom")?.value;
            var prenom = document.getElementById("formSavePrenom")?.value;
            const telephone = document.getElementById("formSaveTelephone")?.value;
            const email = document.getElementById("formSaveEmail")?.value;
            var password = document.getElementById("formSavePassword")?.value;
          
            if (nom && prenom && telephone && email && password) {
              // Nouvelle personne
              const movie = { nom: nom, prenom: prenom, telephone: telephone, email: email, password: password };
          
              // Ajout de la nouvelle personne
              movies.push(movie);
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
        
    }
    
}