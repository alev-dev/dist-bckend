export function validateUser(user) {
    const { name, email, lastName, password, birthDate } = user;
    if (!name) {
        return new Error('Name is required');
    }
    if (!email) {
        return new Error('Email is required');
    }
    if (!lastName) {
        return new Error('Last name is required');
    }
    if (password.length < 6) {
        return new Error('Password must be at least 6 characters');
    }
    if (new Date(birthDate) > new Date()) {
        return new Error('Birth date must be in the past');
    }
    return;
}
