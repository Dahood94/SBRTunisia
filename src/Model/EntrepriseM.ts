
export class Entreprise {
    constructor(
        public CodeE: number,
        public matFisc: string,
        public nomE : string,
        public statutJuridique: string,
        public dateCreation: Date,
        public email: string,
        public telephone: string,
        public telephonefixe: string,
        public adresse: string,
        public tailleEntreprise: string,
        public nomAdminC: string,
        public region: string,
        public secteurTravail: string

    ){
    }
}