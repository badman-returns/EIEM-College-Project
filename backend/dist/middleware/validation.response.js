"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResponder = void 0;
const express_validator_1 = require("express-validator");
class ValidationResponder {
    constructor() {
    }
    static fieldValidationResponder() {
        return (req, res, next) => {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send(errors.array({ onlyFirstError: true }));
            }
            else {
                return next();
            }
        };
    }
    static unauthorizedValidationResponder() {
        return (req, res, next) => {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(401).send(errors.array({ onlyFirstError: true }));
            }
            else {
                return next();
            }
        };
    }
}
exports.ValidationResponder = ValidationResponder;
