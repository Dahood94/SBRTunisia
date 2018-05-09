import { Component, AfterViewInit, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Banque } from '../../Model/BanqueM';
import { BanqueServiceService } from '../banque-service.service';
declare var $: any;

@Component({
  selector: 'app-inscripbanque',
  templateUrl: './inscripbanque.component.html',
  styleUrls: ['./inscripbanque.component.css']
})
export class InscripbanqueComponent implements OnInit {
  allBanques :any[];
  Banques :Array<any> = [];
  coddoc1:any;
  statusCode: number;
  requestProcessing = false;
  CodeBToUpdate = null;
  processValidation = false;
 
  //Create form
  articleForm = new FormGroup({
    matFisc: new FormControl('',),
    nomB: new FormControl('',),
    statutJuridique: new FormControl(''),
    dateCreation: new FormControl(''),	   
    email: new FormControl('',),
    telephone: new FormControl('',),
    telephonefixe: new FormControl('',),
    adresse: new FormControl('',),
    tailleBanque: new FormControl('',),
    nomAdminC: new FormControl('',),
    region: new FormControl('',),
    secteurTravail: new FormControl('',)
  });
  //Create constructor to get service instance
  constructor(public BanqueServiceService: BanqueServiceService) {
  }
  //Create ngOnInit() and and load articles
  ngOnInit(): void {
  
  
  /*Affichage de la table sous forme de tableau
    this.getAllBanques();
   let Banques = [];
   this.Banques.length = 0 ;
   for(let i = 0,l = this.allBanques.length; i < l; i++) {
    
     let doc:Banque = {
     CodeB:this.allBanques[i]["CodeB"],
     designation:this.allBanques[i]["designation"],
     date_upload:this.allBanques[i]["date_upload"]
     };
     this.Banques.push(doc)
  }
 */
   
   
      
     
  
 
  }   
  //Fetch all articles
  
  getAllBanques() {
       this.BanqueServiceService.getAllBanques()
     .subscribe(
               data => this.allBanques = data,
               errorCode =>  this.statusCode = errorCode);  
 
             }
  //Handle create and update article
  
  onBanqueFormSubmit() {
   this.processValidation = true;   
   if (this.articleForm.invalid) {
        return; //Validation failed, exit from method.
   }   
   //Form is valid, now perform create or update
   else  this.preProcessConfigurations();
     let matFisc = this.articleForm.get('matFisc').value.trim();
     let nomB = this.articleForm.get('nomB').value.trim();
     let statutJuridique = this.articleForm.get('statutJuridique').value.trim();
     let dateCreation = this.articleForm.get('dateCreation').value.trim();
     let email = this.articleForm.get('email').value.trim();
     let telephone = this.articleForm.get('telephone').value.trim();
     let telephonefixe = this.articleForm.get('telephonefixe').value.trim();
     let adresse = this.articleForm.get('adresse').value.trim();
     let nomAdminC = this.articleForm.get('nomAdminC').value.trim();
     let region = this.articleForm.get('region').value.trim();
    
   if (this.CodeBToUpdate === null) {  
     //Handle create article
     let article= new Banque(null ,matFisc ,nomB ,statutJuridique,dateCreation,email,telephone,telephonefixe,adresse,nomAdminC,region);	  
     this.BanqueServiceService.createBanque(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllBanques();	
         this.backToCreateBanque();
         },
           errorCode => this.statusCode = errorCode);
           
     
   } else {  
        //Handle update article
     let article= new Banque(this.CodeBToUpdate,matFisc,nomB,statutJuridique,dateCreation,email,telephone,telephonefixe,adresse,nomAdminC,region);
     this.BanqueServiceService.updateBanque(article)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllBanques();	
         this.backToCreateBanque();
         },
           errorCode => this.statusCode = errorCode);	  
   }
 
  }
  //Load article by id to edit
  loadBanqueToEdit(CodeB: string) {
     this.preProcessConfigurations();
     this.BanqueServiceService.getBanqueById(CodeB)
       .subscribe(Doc => {
               this.CodeBToUpdate = Doc.CodeB;   
               this.articleForm.setValue({ matFisc: Doc.matFisc, nomB: Doc.nomB,statutJuridique: Doc.statutJuridique,dateCreation: Doc.dateCreation,email: Doc.email,telephone: Doc.telephone,telephonefixe: Doc.telephonefixe,adresse: Doc.adresse,nomAdminC: Doc.nomAdminC,region: Doc.region});
         this.processValidation = true;
         this.requestProcessing = false;   
           },
           errorCode =>  this.statusCode = errorCode);   
  }
  //Delete article
  deleteBanque(CodeB: string) {
     this.preProcessConfigurations();
     this.BanqueServiceService.deleteBanqueById(CodeB)
       .subscribe(successCode => {
               this.statusCode = successCode;
           this.getAllBanques();	
           this.backToCreateBanque();
         },
           errorCode => this.statusCode = errorCode);    
  }
  //Perform preliminary processing configurations
  preProcessConfigurations() {
     this.statusCode = null;
   this.requestProcessing = true;   
  }
  //Go back from update to create
  backToCreateBanque() {
     this.CodeBToUpdate = null;
     this.articleForm.reset();	  
   this.processValidation = false;
  }
 
 

}
