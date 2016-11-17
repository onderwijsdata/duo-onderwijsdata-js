'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonld = require('jsonld');

var _jsonld2 = _interopRequireDefault(_jsonld);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _schemas = require('./schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Use the jsonld promise-based API since it works nicely with await/async
var promises = _jsonld2.default.promises;

var DUO_API_BASE_URL = "https://api.duo.nl/v0/";
var DUO_ENDPOINT_VO_VESTIGINGEN = '/datasets/02.-alle-vestigingen-vo/search';

var DUOApiClient = function () {
  function DUOApiClient() {
    var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DUO_API_BASE_URL;
    var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var passwd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, DUOApiClient);

    // Clean the final slash from baseURL if it is appended
    this.baseURL = baseURL.replace(/(\/)+$/, '');

    // Create instance
    this.axios = _axios2.default.create({
      baseURL: this.baseURL,
      responseType: 'json'
    });

    // HTTP basic auth
    if (user && passwd) {
      this.axios.defaults.auth = {
        username: user,
        password: passwd
      };
    }

    // And set up XML body for post
    this.axios.defaults.headers = {
      common: { Accept: 'application/ld+json,application/json,*/*;q=0.1' }
    };
  }

  _createClass(DUOApiClient, [{
    key: 'getVoVestigingen',
    value: function () {
      var _ref = _asyncToGenerator(function* () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            brin = _ref2.brin,
            plaats = _ref2.plaats;

        var params = {};
        if (brin) {
          params.brin = brin;
        }
        if (plaats) {
          params.plaatsnaam = plaats;
        }

        var res = yield this.axios.get(DUO_ENDPOINT_VO_VESTIGINGEN, {
          params: params
        });

        var _ref3 = yield promises.compact(res.data, _schemas.DUO_VO_VESTIGING_CONTEXT),
            results = _ref3.results;

        if (!results) {
          return [];
        }

        return Promise.all(results.map(function () {
          var _ref4 = _asyncToGenerator(function* (res) {
            var bezoekadres = yield promises.compact(res, _schemas.DUO_VO_VESTIGING_BEZOEKADRES);
            var correspondentieadres = yield promises.compact(res, _schemas.DUO_VO_VESTIGING_CORRESPONDENTIEADRES);

            var school = _extends({}, res, {
              bezoekadres: bezoekadres,
              correspondentieadres: correspondentieadres
            });

            return _schemas.VOVestigingSchema.validate(school, { stripUnknown: true });
          });

          return function (_x6) {
            return _ref4.apply(this, arguments);
          };
        }()));
      });

      function getVoVestigingen(_x4) {
        return _ref.apply(this, arguments);
      }

      return getVoVestigingen;
    }()
  }]);

  return DUOApiClient;
}();

exports.default = DUOApiClient;