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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const User_1 = require("../models/User");
const argon2_1 = __importDefault(require("argon2"));
const validation_1 = require("../utils/validation");
const inputs_1 = require("../utils/inputs");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let InputError = class InputError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InputError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], InputError.prototype, "message", void 0);
InputError = __decorate([
    (0, type_graphql_1.ObjectType)()
], InputError);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [InputError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    async register(options, {}) {
        const errors = (0, validation_1.registerValidation)(options);
        if (errors) {
            return { errors };
        }
        const passwordHash = await argon2_1.default.hash(options.password);
        let user;
        try {
            const result = await (0, typeorm_1.getConnection)()
                .createQueryBuilder()
                .insert()
                .into(User_1.User)
                .values({
                username: options.username,
                fName: options.fName,
                lName: options.lName,
                address: options.address,
                phone: options.phone,
                email: options.email,
                password: passwordHash,
            })
                .returning('*')
                .execute();
            console.log('result: ', result);
            user = result.raw[0];
        }
        catch (err) {
            if (err.code === '23505' || err.detail.includes('exists')) {
                return {
                    errors: [
                        {
                            field: 'username',
                            message: 'That username already exists',
                        },
                        {
                            field: 'email',
                            message: 'That email is already in use',
                        },
                    ],
                };
            }
        }
        return { user };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UserSchema, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map