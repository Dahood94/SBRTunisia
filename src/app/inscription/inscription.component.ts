import { Component, AfterViewInit, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Entreprise } from '../../Model/EntrepriseM';
import { EntrepriseServiceService } from '../entreprise-service.service';
declare var $: any;

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements  OnInit {
  allEntreprises :any[];
  Entreprises :Array<any> = [];
 coddoc1:any;
  statusCode: number;
  requestProcessing = false;
  CodeEToUpdate = null;
  processValidation = false;
 
  //Create form
  articleForm = new FormGroup({
    matFisc: new FormControl('', Validators.required),
    nomE: new FormControl('', Validators.required),
    statutJuridique: new FormControl(''),
    dateCreation: new FormControl('', Validators.required),	   
    email: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    telephonefixe: new FormControl(''),
    adresse: new FormControl('', Validators.required),
    tailleEntreprise: new FormControl(''),
    nomAdminC: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    secteurTravail: new FormControl('', Validators.required)
  });
  //Create constructor to get service instance
  constructor(public EntrepriseServiceService: EntrepriseServiceService) {
  }
  //Create ngOnInit() and and load articles
  ngOnInit(): void {
  
  
  /*Affichage de la table sous forme de tableau
    this.getAllEntreprises();
   let Entreprises = [];
   this.Entreprises.length = 0 ;
   for(let i = 0,l = this.allEntreprises.length; i < l; i++) {
    
     let doc:Entreprise = {
     CodeE:this.allEntreprises[i]["CodeE"],
     designation:this.allEntreprises[i]["designation"],
     date_upload:this.allEntreprises[i]["date_upload"]
     };
     this.Entreprises.push(doc)
  }
 */
   
   
      
     
  
 
  }   
  //Fetch all articles
  getAllEntreprises() {
       this.EntrepriseServiceService.getAllEntreprises()
     .subscribe(
               data => this.allEntreprises = data,
               errorCode =>  this.statusCode = errorCode);
              
               
              
           
 
             }
  //Handle create and update article
  onEntrepriseFormSubmit() {
   this.processValidation = true;   
   if (this.articleForm.invalid) {
        return; //Validation failed, exit from method.
   }   
   //Form is valid, now perform create or update
   else  this.preProcessConfigurations();
     let matFisc = this.articleForm.get('matFisc').value.trim();
     let nomE = this.articleForm.get('nomE').value.trim();
     let statutJuridique = this.articleForm.get('statutJuridique').value.trim();
     let dateCreation = this.articleForm.get('dateCreation').value.trim();
     let email = this.articleForm.get('email').value.trim();
     let telephone = this.articleForm.get('telephone').value.trim();
     let telephonefixe = this.articleForm.get('telephonefixe').value.trim();
     let adresse = this.articleForm.get('adresse').value.trim();
     let tailleEntreprise = this.articleForm.get('tailleEntreprise').value.trim();
     let nomAdminC = this.articleForm.get('nomAdminC').value.trim();
     let region = this.articleForm.get('region').value.trim();
     let secteurTravail = this.articleForm.get('secteurTravail').value.trim();
    
   if (this.CodeEToUpdate === null) {  
     //Handle create article
     let article= new Entreprise(null, matFisc, nomE,statutJuridique,dateCreation,email,telephone,telephonefixe,adresse,tailleEntreprise,nomAdminC,region,secteurTravail);	  
     this.EntrepriseServiceService.createEntreprise(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllEntreprises();	
         this.backToCreateEntreprise();
         },
           errorCode => this.statusCode = errorCode);
          
   } else {  
        //Handle update article
     let article= new Entreprise(this.CodeEToUpdate,matFisc, nomE,statutJuridique,dateCreation,email,telephone,telephonefixe,adresse,tailleEntreprise,nomAdminC,region,secteurTravail);
     this.EntrepriseServiceService.updateEntreprise(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllEntreprises();	
         this.backToCreateEntreprise();
         },
           errorCode => this.statusCode = errorCode);	  
   }
   console.log(this.statusCode)
  }
  //Load article by id to edit
  loadEntrepriseToEdit(CodeE: string) {
     this.preProcessConfigurations();
     this.EntrepriseServiceService.getEntrepriseById(CodeE)
       .subscribe(Doc => {
               this.CodeEToUpdate = Doc.CodeE;   
               this.articleForm.setValue({ matFisc: Doc.matFisc, nomE: Doc.nomE,statutJuridique: Doc.statutJuridique,dateCreation: Doc.dateCreation,email: Doc.email,telephone: Doc.telephone,telephonefixe: Doc.telephonefixe,adresse: Doc.adresse,tailleEntreprise: Doc.tailleEntreprise,nomAdminC: Doc.nomAdminC,region: Doc.region,secteurTravail: Doc.secteurTravail});
         this.processValidation = true;
         this.requestProcessing = false;   
           },
           errorCode =>  this.statusCode = errorCode);   
  }
  //Delete article
  deleteEntreprise(CodeE: string) {
     this.preProcessConfigurations();
     this.EntrepriseServiceService.deleteEntrepriseById(CodeE)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllEntreprises();	
           this.backToCreateEntreprise();
         },
           errorCode => this.statusCode = errorCode);    
  }
  //Perform preliminary processing configurations
  preProcessConfigurations() {
     this.statusCode = null;
   this.requestProcessing = true;   
  }
  //Go back from update to create
  backToCreateEntreprise() {
     this.CodeEToUpdate = null;
     this.articleForm.reset();	  
   this.processValidation = false;
  }
 
 

}
