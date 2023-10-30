import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router()

router.get('/libros', libro.getAll);
router.get('/libro', libro.getOne);

/*router.post('/libro', libro.add);
router.delete('/libro', libro.delete);
router.put('/libro', libro.update);*/

/* -- ACTIVIDAD INTEGRADORA -- */
/* Actividad 1 Punto A */

router.post('/libro', libro.add);

/* Actividad 1 Punto B */

router.put('/libro', libro.update);

/* Actividad 1 Punto C */

router.delete('/libro', libro.delete);