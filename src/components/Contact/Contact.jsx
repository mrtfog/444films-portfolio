import React,{ useState }from 'react'
import s from '../../scss/components/Contact/_contact.module.scss'
import { Button, Grid, TextField, Box } from '@mui/material'


export default function Contact() {

  const [name, setName] = useState('Cat in the Hat');


  return (
    <section className={s.contactContainer} id='Contacto'>
      <div className={s.formContainer}>
        <Box my={2} noValidate className={s.formBox}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField error={false} label='Dinos tu nombre' type='text' name='name' margin='dense' variant='outlined' helperText='Campo obligatorio' fullWidth autoComplete="off" />
                  <TextField error={false} label='Ingrese su E-Mail' type='email' name='email' margin='dense' variant='outlined' helperText='Campo obligatorio' fullWidth autoComplete="off"/>
                  <TextField error={false} label='Escribe tu mensaje' type='text' name='text' margin='dense' variant='outlined' helperText='Campo obligatorio' fullWidth multiline minRows={8} maxRows={8}/>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" >Enviar</Button>
      </div>
    </section>
  )
}
