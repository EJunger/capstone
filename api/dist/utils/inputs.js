"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPasswordLogin = exports.UserSchema = void 0;
const type_graphql_1 = require("type-graphql");
let UserSchema = class UserSchema {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserSchema.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserSchema.prototype, "fName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserSchema.prototype, "lName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserSchema.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserSchema.prototype, "email", void 0);
UserSchema = __decorate([
    (0, type_graphql_1.InputType)()
], UserSchema);
exports.UserSchema = UserSchema;
let EmailPasswordLogin = class EmailPasswordLogin {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailPasswordLogin.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailPasswordLogin.prototype, "password", void 0);
EmailPasswordLogin = __decorate([
    (0, type_graphql_1.InputType)()
], EmailPasswordLogin);
exports.EmailPasswordLogin = EmailPasswordLogin;
//# sourceMappingURL=inputs.js.map