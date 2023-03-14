import React, { useState }from 'react'
import s from '../../scss/components/Contact/_contact.module.scss'
import { Button, Grid, TextField, Box } from '@mui/material'
import { Address, Send, Phone } from '../../constants/icons';
import { motion } from 'framer-motion'



export default function Contact() {

  return (
    <section className={s.contactContainer} id='Contacto'>
      <motion.div whileInView={{ y: [-25, 0], opacity: [0, 1]}} transition={{ duration: 1 }} className={s.secondaryContainer}>

        <div className={s.formTitle}>
          <h4>A un click de distancia</h4>
          <h2>Contactame</h2> 
        </div>

        <motion.div whileInView={{ y: [-25, 0], opacity: [0, 1]}} transition={{ duration: 1.8 }} className={s.formContainer}>
          <div className={s.dataContainer}>
              <div className={s.title}>
                <h3>¿Por qué deberías hablarme?</h3>
                <p>Me gustaría que te contactes conmigo para planear tu próximo proyecto audiovisual.</p>
              </div>

              <div className={s.contact}>
                <div className={s.personInformation}>
                  <span className={s.icon}> <Address /> </span>
                  <p> Buenos Aires, Argentina.</p>
                </div>

                <div className={s.personInformation}>
                  <span className={s.icon}> <Send /> </span>
                  <p>email@gmail.com</p>
                </div>

                <div className={s.personInformation}>
                  <span className={`${s.icon}`}> <Phone /> </span>
                  <p>+54 9 11 5555 3333</p>
                </div>
              </div>
          </div>

          <Box my={1} noValidate className={s.formBox}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField error={false} label='Escribí tu nombre' type='text' name='name' margin='dense' variant='outlined' fullWidth autoComplete="off" />
                <TextField error={false} label='Ingresa tu E-Mail' type='email' name='email' margin='dense' variant='outlined' fullWidth autoComplete="off"/>
                <TextField error={false} label='Escribe tu mensaje' type='text' name='text' margin='dense' variant='outlined' fullWidth multiline minRows={4} maxRows={6}/>
              </Grid>
            </Grid>
            <div className={s.buttonContainer}>
              <Button className={s.button} variant="contained" >Enviar <span> <Send /> </span> </Button>
            </div>
          </Box>

        </motion.div>
      </motion.div>
    </section>
  )
}
