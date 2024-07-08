import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { titleValidation, bodyValidation, userIdValidation } from '../validation/postValidation';
import { IFormInput } from '../types';

const PostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    {...register('title', titleValidation)}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div>
                <label htmlFor="body">Body</label>
                <textarea
                    id="body"
                    {...register('body', bodyValidation)}
                />
                {errors.body && <p>{errors.body.message}</p>}
            </div>

            <div>
                <label htmlFor="userId">User ID</label>
                <input
                    id="userId"
                    type="number"
                    {...register('userId', userIdValidation)}
                />
                {errors.userId && <p>{errors.userId.message}</p>}
            </div>

            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
