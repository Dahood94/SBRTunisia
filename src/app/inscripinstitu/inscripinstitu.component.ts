import { Component, AfterViewInit, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InstitutionFin } from '../../Model/InstitutionFinM';
import { InstituFinServiceService } from '../institu-fin-service.service';

@Component({
  selector: 'app-inscripinstitu',
  templateUrl: './inscripinstitu.component.html',
  styleUrls: ['./inscripinstitu.component.css']
})
export class InscripinstituComponent implements OnInit {
  allInstitutionFins :any[];
  InstitutionFins :Array<any> = [];
 coddoc1:any;
  statusCode: number;
  requestProcessing = false;
  CodeRToUpdate = null;
  processValidation = false;
 
  //Create form
  articleForm = new FormGroup({
    matFiscR: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    adresse: new FormControl(''),
    mailR: new FormControl('', Validators.required),	   
    tel1: new FormControl('', Validators.required),
    tel2: new FormControl('', Validators.required),
    fax: new FormControl(''),
    nomAdminC: new FormControl(''),
  });
  //Create constructor to get service instance
  constructor(public InstituFinServiceService: InstituFinServiceService) {
  }
  //Create ngOnInit() and and load articles
  ngOnInit(): void {
  
  
  /*Affichage de la table sous forme de tableau
    this.getAllInstitutionFins();
   let InstitutionFins = [];
   this.InstitutionFins.length = 0 ;
   for(let i = 0,l = this.allInstitutionFins.length; i < l; i++) {
    
     let doc:InstitutionFin = {
     CodeR:this.allInstitutionFins[i]["CodeR"],
     designation:this.allInstitutionFins[i]["designation"],
     date_upload:this.allInstitutionFins[i]["date_upload"]
     };
     this.InstitutionFins.push(doc)
  }
 */
   
   
      
     
  
 
  }   
  //Fetch all articles
  getAllInstitutionFins() {
       this.InstituFinServiceService.getAllInstitutionFins()
     .subscribe(
               data => this.allInstitutionFins = data,
               errorCode =>  this.statusCode = errorCode); 
               
              
           
 
             }
  //Handle create and update article
  onInstitutionFinFormSubmit() {
   this.processValidation = true;   
   if (this.articleForm.invalid) {
        return; //Validation failed, exit from method.
   }   
   //Form is valid, now perform create or update
   else  this.preProcessConfigurations();
   let nomAdminC = this.articleForm.get('nomAdminC').value.trim();
     let matFiscR = this.articleForm.get('matFiscR').value.trim();
     let nom = this.articleForm.get('nom').value.trim(); 
     let adresse = this.articleForm.get('adresse').value.trim();
     let mailR = this.articleForm.get('mailR').value.trim();
     let tel1 = this.articleForm.get('tel1').value.trim();
     let tel2 = this.articleForm.get('tel2').value.trim();
     let fax = this.articleForm.get('fax').value.trim();
     
   if (this.CodeRToUpdate === null) {  
     //Handle create article
     let article= new InstitutionFin(null, matFiscR, nom,adresse,mailR,tel1,tel2,fax,nomAdminC);	  
     this.InstituFinServiceService.createInstitutionFin(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllInstitutionFins();	
         this.backToCreateInstitutionFin();
         alert("Votre demande d'inscription est envoyée avec succèes on vous conatactera par l'adresse mail fournis pour les coordonnées de votre compte")
         },
           errorCode => this.statusCode = errorCode);
          
   } else {  
        //Handle update article
     let article= new InstitutionFin(this.CodeRToUpdate, matFiscR, nom,adresse,mailR,tel1,tel2,fax,nomAdminC);
     this.InstituFinServiceService.updateInstitutionFin(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllInstitutionFins();	
         this.backToCreateInstitutionFin();
         },
           errorCode => this.statusCode = errorCode);	  
   }
   console.log(this.statusCode)
  }
  //Load article by id to edit
  loadInstitutionFinToEdit(CodeR: string) {
     this.preProcessConfigurations();
     this.InstituFinServiceService.getInstitutionFinById(CodeR)
       .subscribe(Doc => {
               this.CodeRToUpdate = Doc.CodeR;    
               this.articleForm.setValue({ matFiscR: Doc.matFiscR, nom: Doc.nom,adresse: Doc.adresse,mailR: Doc.mailR,tel1: Doc.tel1,tel2: Doc.tel2,fax: Doc.fax, nomAdminC: Doc.nomAdminC});
         this.processValidation = true;
         this.requestProcessing = false;   
           },
           errorCode =>  this.statusCode = errorCode);   
  }
  //Delete article
  deleteInstitutionFin(CodeR: string) {
     this.preProcessConfigurations();
     this.InstituFinServiceService.deleteInstitutionFinById(CodeR)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllInstitutionFins();	
           this.backToCreateInstitutionFin();
         },
           errorCode => this.statusCode = errorCode);    
  }
  //Perform preliminary processing configurations
  preProcessConfigurations() {
     this.statusCode = null;
   this.requestProcessing = true;   
  }
  //Go back from update to create
  backToCreateInstitutionFin() {
     this.CodeRToUpdate = null;
     this.articleForm.reset();	  
   this.processValidation = false;
  }
 
 

}
