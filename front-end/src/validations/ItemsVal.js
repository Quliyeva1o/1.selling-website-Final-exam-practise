import * as Yup from 'yup'

export const ItemsValidations=Yup.object({
    title:Yup.string().required(),
    desc:Yup.string().required(),
    img:Yup.string().url().required(),
    likeCount:Yup.number().required()
})