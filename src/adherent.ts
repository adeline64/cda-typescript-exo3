import { Budget } from "./budget";
export class Adherent {
    //données
    private id : string;
    private nom: string;
    private prenom : string;
    private budget : Budget;
    private telephone : number;
    private email : string;
    private password : string | undefined;


    //constructor 
    constructor(nom: string, prenom: string) {
        this.id = Date.now.toString()
        this.nom = nom;
        this.prenom = prenom
        this.budget = new Budget(900,[])
        this.telephone = telephone
        this.email = "email"
        this.password = password
    }
    

    create(){
        document.getElementById("formSave").addEventListener("click", function() {
            // Récupération des champs
            var nom = document.getElementById("nom").value;
            var prenom = document.getElementById("prenom").value;
            const telephone = document.getElementById("telephone").value;
            const email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
          
            if (nom && prenom && telephone && email && password) {
              // Nouvelle ligne
              const movie = { email: email, password: password };
          
              // Ajout de la nouvelle ligne
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