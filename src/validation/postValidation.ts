export const titleValidation = {
    required: 'Title is required',
    minLength: {
        value: 5,
        message: 'Title must be at least 5 characters long'
    },
    maxLength: {
        value: 100,
        message: 'Title must be less than 100 characters'
    }
};

export const bodyValidation = {
    required: 'Body is required',
    minLength: {
        value: 10,
        message: 'Body must be at least 10 characters long'
    }
};

export const userIdValidation = {
    required: 'User ID is required',
    min: {
        value: 1,
        message: 'User ID must be at least 1'
    }
};
