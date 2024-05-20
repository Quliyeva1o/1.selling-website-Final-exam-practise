import { useFormik } from 'formik';
import { ItemsValidations } from '../../validations/ItemsVal';
import { TextField } from '@mui/material';
import Item from '../../classes/ItemClass';
import { post } from '../../requests/requests';
import { useContext } from 'react';
import ItemsContext from '../../context/ItemsCotext';

const AddItem = () => {
  const{setItems}= useContext(ItemsContext)
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      img: "",
      likeCount: ""
    },
    onSubmit: (values) => {
      const newitem= new Item(values.title,values.img,values.desc,values.likeCount)
      post(newitem)
      setItems((curr)=>([...curr,newitem]))
    },  
    validationSchema: ItemsValidations
  })
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <TextField id="outlined-basic" label="ttile" variant="outlined" value={formik.values.title} name='title' onChange={formik.handleChange} />
        {formik.errors.title && <span style={{color:"red"}}>{formik.errors.title}</span>}
        <TextField id="outlined-basic" label="img" variant="outlined" value={formik.values.img} name='img' onChange={formik.handleChange} />
        {formik.errors.img && <span style={{color:"red"}}>{formik.errors.img}</span>}
        <TextField id="outlined-basic" label="desc" variant="outlined" value={formik.values.desc} name='desc' onChange={formik.handleChange} />
        {formik.errors.desc && <span style={{color:"red"}}>{formik.errors.desc}</span>}
        <TextField id="outlined-basic" label="likeCount" variant="outlined" value={formik.values.likeCount} name='likeCount' onChange={formik.handleChange} />
        {formik.errors.likeCount && <span style={{color:"red"}}>{formik.errors.likeCount}</span>}
        <button type='submit'> add </button>
      </form>
    </div>
  )
}

export default AddItem
