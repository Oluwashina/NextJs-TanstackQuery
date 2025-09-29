"use client";

import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {todoSchema, TodoInput} from '@/lib/validators'
// import {v4 as uuidv4} from 'uuid'
import { useTodos } from '@/hooks/useTodos';

export default function TodoForm() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<TodoInput>({
        resolver: zodResolver(todoSchema),
    })

    const {addTodo} = useTodos()

    const onSubmit = (data: TodoInput) => { 
        addTodo.mutate(data.title)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-2 mt-4">
            <div className='w-full'>
                <input
                type="text"
                placeholder="Add todo..."
                className="border rounded w-full px-3 py-2 flex-1"
                {...register('title')}
              />
                 {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            
             <button type="submit" className="px-4 py-2 hover:bg-blue-600 transition bg-blue-500 text-white rounded">
                Add
            </button>
        </form>
    )
}