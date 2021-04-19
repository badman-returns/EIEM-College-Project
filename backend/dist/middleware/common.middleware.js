"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAuthorizedUser = exports.LoadAuthorization = exports.ValidateBasicAuth = exports.ValidateBearerToken = void 0;
const express_validator_1 = require("express-validator");
const validation_response_1 = require("./validation.response");
const utility_1 = require("../utility");
class CommonValidator {
    constructor() {
    }
    static validateBearerToken() {
        return [
            express_validator_1.header('authorization', 'Authorization Header Missing')
                .exists()
                .custom(value => {
                return value.toString().toLowerCase().startsWith('bearer ');
            }).withMessage('Must provide bearer token'),
            validation_response_1.ValidationResponder.unauthorizedValidationResponder(),
        ];
    }
    static validateBasicAuth() {
        return [
            express_validator_1.header('authorization', 'Authorization Header Missing')
                .exists()
                .custom((value) => {
                return value.toLowerCase().startsWith('basic ');
            }).withMessage('Must use basic authorization'),
            validation_response_1.ValidationResponder.unauthorizedValidationResponder(),
        ];
    }
    static loadAuthorization() {
        return [
            (req, res, next) => {
                let authorization = req.headers['authorization'];
                let authParts = authorization.split(' ');
                req.token = authParts[1];
                return next();
            }
        ];
    }
    static validateAndLoadAuthorization() {
        return [
            (req, res, next) => {
                const user = utility_1.Encryption.validateToken(req.token);
                if (!user) {
                    return res.status(401).send();
                }
                req.user = user;
                return next();
            }
        ];
    }
}
const ValidateBearerToken = CommonValidator.validateBearerToken();
exports.ValidateBearerToken = ValidateBearerToken;
const ValidateBasicAuth = CommonValidator.validateBasicAuth();
exports.ValidateBasicAuth = ValidateBasicAuth;
const LoadAuthorization = CommonValidator.loadAuthorization();
exports.LoadAuthorization = LoadAuthorization;
const LoadAuthorizedUser = CommonValidator.validateAndLoadAuthorization();
exports.LoadAuthorizedUser = LoadAuthorizedUser;
