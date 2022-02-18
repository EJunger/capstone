"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const registerValidation = (options) => {
    if (options.username.length <= 2) {
        return [
            {
                field: 'username',
                message: 'Username must be greater than 2 characters',
            },
        ];
    }
    if (options.username.includes('@')) {
        return [
            {
                field: 'username',
                message: 'Username can not contain @',
            },
        ];
    }
    if (!options.email.includes('@')) {
        return [
            {
                field: 'email',
                message: 'Invalid email',
            },
        ];
    }
    if (options.password.length <= 3) {
        return [
            {
                field: 'password',
                message: 'Password must be greater than 3 characters',
            },
        ];
    }
    return null;
};
exports.registerValidation = registerValidation;
//# sourceMappingURL=validation.js.map