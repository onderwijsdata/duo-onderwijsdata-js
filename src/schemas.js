import yup from 'yup';
  
  /** 
   * from <https://api.duo.nl/v0/datasets/02.-alle-vestigingen-vo/search\?gemeentenaam\=BOXMEER>
   *  "STRAATNAAM CORRESPONDENTIEADRES": "Postbus",
   *  "NODAAL GEBIED NAAM": "Boxmeer",
   *  "GEMEENTENAAM": "BOXMEER",
   *  "RMC-REGIO NAAM": "Noordoost-Brabant",
   *  "RPA-GEBIED NAAM": "Noordoost-Brabant",
   *  "WGR-GEBIED CODE": "36",
   *  "POSTCODE": "5831 CR",
   *  "INTERNETADRES": "www.metameer.nl",
   *  "ONDERWIJSSTRUCTUUR": "VBO",
   *  "ONDERWIJSGEBIED NAAM": "Oostelijk Maas-Waalgebied",
   *  "PLAATSNAAM": "BOXMEER",
   *  "GEMEENTENUMMER": "0756",
   *  "PLAATSNAAM CORRESPONDENTIEADRES": "SINT ANTHONIS",
   *  "DENOMINATIE": "Rooms-Katholiek",
   *  "COROPGEBIED NAAM": "Noordoost-Noord-Brabant",
   *  "BRIN NUMMER": "16SW",
   *  "NODAAL GEBIED CODE": "73",
   *  "BEVOEGD GEZAG NUMMER": "77494",
   *  "PROVINCIE": "Noord-Brabant",
   *  "WGR-GEBIED NAAM": "Noordoost-Brabant",
   *  "RMC-REGIO CODE": "36",
   *  "VESTIGINGSNAAM": "Rooms Katholieke Scholengemeenschap METAMEER voor ATH HAVO VMBO LWOO",
   *  "HUISNUMMER-TOEVOEGING": "5",
   *  "RPA-GEBIED CODE": "27",
   *  "POSTCODE CORRESPONDENTIEADRES": "5845 ZG",
   *  "HUISNUMMER-TOEVOEGING CORRESPONDENTIEADRES": "14",
   *  "ONDERWIJSGEBIED CODE": "11",
   *  "VESTIGINGSNUMMER": "16SW03",
   *  "COROPGEBIED CODE": "35",
   *  "STRAATNAAM": "Stationsweg",
   *  "TELEFOONNUMMER": "0485571434"
   */


export const DUO_VO_VESTIGING_BEZOEKADRES = {
  straat: 'https://www.lod.duo.nl/inf/id/begrip/Straatnaam',
  huisnummerToevoeging: 'https://www.lod.duo.nl/inf/id/begrip/HuisnummerToevoeging',
  plaats: 'https://www.lod.duo.nl/inf/id/begrip/Plaatsnaam',
  postcode: 'https://www.lod.duo.nl/inf/id/begrip/Postcode',
};


export const DUO_VO_VESTIGING_CORRESPONDENTIEADRES = {
  straat: 'https://www.lod.duo.nl/inf/id/begrip/StraatnaamCorrespondentieadres',
  huisnummerToevoeging: 'https://www.lod.duo.nl/inf/id/begrip/HuisnummerToevoegingCorrespondentieadres',
  plaats: 'https://www.lod.duo.nl/inf/id/begrip/PlaatsnaamCorrespondentieadres',
  postcode: 'https://www.lod.duo.nl/inf/id/begrip/PostcodeCorrespondentieadres',
};


export const DUO_VO_VESTIGING_CONTEXT = {
  brinNummer: 'https://www.lod.duo.nl/inf/id/begrip/BrinNummer',
  vestigingsNummer: 'https://www.lod.duo.nl/inf/id/begrip/Vestigingsnummer',
  
  vestigingsnaam: 'https://www.lod.duo.nl/inf/id/begrip/Vestigingsnaam',
  onderwijsStructuur: 'https://www.lod.duo.nl/inf/id/begrip/Onderwijsstructuur',
  denominatie: 'https://www.lod.duo.nl/inf/id/begrip/Denominatie',

  internetAdres: 'https://www.lod.duo.nl/inf/id/begrip/Internetadres',
  telefoonnummer: 'https://www.lod.duo.nl/inf/id/begrip/Telefoonnummer',
  
  bevoegdGezagNummer: 'https://www.lod.duo.nl/inf/id/begrip/BevoegdGezagNummer',
  
  provincie: 'https://www.lod.duo.nl/inf/id/begrip/Provincie',

  gemeenteNummer: 'https://www.lod.duo.nl/inf/id/begrip/Gemeentenummer',
  gemeenteNaam: 'https://www.lod.duo.nl/inf/id/begrip/Gemeentenaam',

  coropgebiedNaam: 'https://www.lod.duo.nl/inf/id/begrip/CoropgebiedNaam',
  coropgebiedCode: 'https://www.lod.duo.nl/inf/id/begrip/CoropgebiedCode',

  nodaalGebiedNaam: 'https://www.lod.duo.nl/inf/id/begrip/NodaalGebiedNaam',
  nodaalGebiedCode: 'https://www.lod.duo.nl/inf/id/begrip/NodaalGebiedCode',

  onderwijsgebiedNaam: 'https://www.lod.duo.nl/inf/id/begrip/OnderwijsgebiedNaam',
  onderwijsgebiedCode: 'https://www.lod.duo.nl/inf/id/begrip/OnderwijsgebiedCode',

  rmcRegioNaam: 'https://www.lod.duo.nl/inf/id/begrip/RmcRegioNaam',
  rmcRegioCode: 'https://www.lod.duo.nl/inf/id/begrip/RmcRegioCode',

  rpaGebiedNaam: 'https://www.lod.duo.nl/inf/id/begrip/RpaGebiedNaam',
  rpaGebiedCode: 'https://www.lod.duo.nl/inf/id/begrip/RpaGebiedCode',

  wgrGebiedNaam: 'https://www.lod.duo.nl/inf/id/begrip/WgrGebiedNaam',
  wgrGebiedCode: 'https://www.lod.duo.nl/inf/id/begrip/WgrGebiedCode',

  results: 'https://api.duo.nl/Results',
};

  /**
   * Create a standard joi schema for these objects
   */
const AdresSchema = yup.object().shape({
  straat: yup.string(),
  huisnummerToevoeging: yup.string(),
  plaats: yup.string(),
  postcode: yup.string(),
});

export const VOVestigingSchema = yup.object().shape({
  brinNummer: yup.string(),
  vestigingsNummer: yup.string(),
  
  vestigingsnaam: yup.string(),
  onderwijsStructuur: yup.string(),
  denominatie: yup.string(),

  internetAdres: yup.string(),
  telefoonnummer: yup.string(),
  
  bevoegdGezagNummer: yup.string(),
  
  provincie: yup.string(),

  gemeenteNummer: yup.string(),
  gemeenteNaam: yup.string(),

  coropgebiedNaam: yup.string(),
  coropgebiedCode: yup.string(),

  nodaalGebiedNaam: yup.string(),
  nodaalGebiedCode: yup.string(),

  onderwijsgebiedNaam: yup.string(),
  onderwijsgebiedCode: yup.string(),

  rmcRegioNaam: yup.string(),
  rmcRegioCode: yup.string(),

  rpaGebiedNaam: yup.string(),
  rpaGebiedCode: yup.string(),

  wgrGebiedNaam: yup.string(),
  wgrGebiedCode: yup.string(),

  bezoekadres: AdresSchema,
  correspondentieadres: AdresSchema,
});
