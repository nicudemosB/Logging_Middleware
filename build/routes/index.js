"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var state_1 = __importDefault(require("./api/state"));
var countries_1 = __importDefault(require("./api/countries"));
var region_1 = __importDefault(require("./api/region"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('main api route');
});
routes.use('/state', state_1.default);
routes.use('/countries', countries_1.default);
routes.use('/region', region_1.default);
exports.default = routes;
