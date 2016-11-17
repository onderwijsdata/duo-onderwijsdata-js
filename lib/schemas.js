'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOVestigingSchema = exports.DUO_VO_VESTIGING_CONTEXT = exports.DUO_VO_VESTIGING_CORRESPONDENTIEADRES = exports.DUO_VO_VESTIGING_BEZOEKADRES = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DUO_VO_VESTIGING_BEZOEKADRES = exports.DUO_VO_VESTIGING_BEZOEKADRES = {
  straat: 'https://www.lod.duo.nl/inf/id/begrip/Straatnaam',
  huisnummerToevoeging: 'https://www.lod.duo.nl/inf/id/begrip/HuisnummerToevoeging',
  plaats: 'https://www.lod.duo.nl/inf/id/begrip/Plaatsnaam',
  postcode: 'https://www.lod.duo.nl/inf/id/begrip/Postcode'
};

var DUO_VO_VESTIGING_CORRESPONDENTIEADRES = exports.DUO_VO_VESTIGING_CORRESPONDENTIEADRES = {
  straat: 'https://www.lod.duo.nl/inf/id/begrip/StraatnaamCorrespondentieadres',
  huisnummerToevoeging: 'https://www.lod.duo.nl/inf/id/begrip/HuisnummerToevoegingCorrespondentieadres',
  plaats: 'https://www.lod.duo.nl/inf/id/begrip/PlaatsnaamCorrespondentieadres',
  postcode: 'https://www.lod.duo.nl/inf/id/begrip/PostcodeCorrespondentieadres'
};

var DUO_VO_VESTIGING_CONTEXT = exports.DUO_VO_VESTIGING_CONTEXT = {
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

  results: 'https://api.duo.nl/Results'
};

/**
 * Create a standard joi schema for these objects
 */
var AdresSchema = _yup2.default.object().shape({
  straat: _yup2.default.string(),
  huisnummerToevoeging: _yup2.default.string(),
  plaats: _yup2.default.string(),
  postcode: _yup2.default.string()
});

var VOVestigingSchema = exports.VOVestigingSchema = _yup2.default.object().shape({
  brinNummer: _yup2.default.string(),
  vestigingsNummer: _yup2.default.string(),

  vestigingsnaam: _yup2.default.string(),
  onderwijsStructuur: _yup2.default.string(),
  denominatie: _yup2.default.string(),

  internetAdres: _yup2.default.string(),
  telefoonnummer: _yup2.default.string(),

  bevoegdGezagNummer: _yup2.default.string(),

  provincie: _yup2.default.string(),

  gemeenteNummer: _yup2.default.string(),
  gemeenteNaam: _yup2.default.string(),

  coropgebiedNaam: _yup2.default.string(),
  coropgebiedCode: _yup2.default.string(),

  nodaalGebiedNaam: _yup2.default.string(),
  nodaalGebiedCode: _yup2.default.string(),

  onderwijsgebiedNaam: _yup2.default.string(),
  onderwijsgebiedCode: _yup2.default.string(),

  rmcRegioNaam: _yup2.default.string(),
  rmcRegioCode: _yup2.default.string(),

  rpaGebiedNaam: _yup2.default.string(),
  rpaGebiedCode: _yup2.default.string(),

  wgrGebiedNaam: _yup2.default.string(),
  wgrGebiedCode: _yup2.default.string(),

  bezoekadres: AdresSchema,
  correspondentieadres: AdresSchema
});