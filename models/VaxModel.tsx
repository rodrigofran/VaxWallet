export default interface VaxModel 
{
    idEventoVacina: number;
    idVacina: number;
    nomeVacina: string;
    urlImage: string;
    urlAnvisa: string;
    dataVacinacao: Date;
    dataReforco: Date;
    numeroDose: number;
    codigoAnvisa: string;
}