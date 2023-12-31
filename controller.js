import {pool} from './database.js';

class LibroController {

    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`SELECT * FROM libros WHERE id_libro=(?)`, [libro.id_libro]);
        res.json(result);
    }

   /* async add(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, ano_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.ano_publicacion, libro.ISBN]);
        res.json({ "id insertado": result.insertId });
    }

    async delete(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE id_libro=(?)`, [libro.id_libro]);
        res.json({ "Registros eliminados": result.affectedRows });
    }

    async update(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), ano_publicacion=(?), ISBN=(?) WHERE id_libro=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.ano_publicacion, libro.ISBN, libro.id_libro]);
        res.json({ "Registros actualizados": result.changedRows });
    } */


    /* -- ACTIVIDAD INTEGRADORA -- */
    /* Actividad 1 Punto A y D */

    async add(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, ano_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.ano_publicacion, libro.ISBN]);
            res.json({ "id insertado": result.insertId });

        } catch (err) {
            console.error(err);
            res.status(400).json({ Error: 'Libro inexistente, verificar los datos ingresados' });
        }

    }

    /* Actividad 1 Punto B y D */

    async update(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), ano_publicacion=(?), ISBN=(?) WHERE id_libro=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.ano_publicacion, libro.ISBN, libro.id_libro]);
            if (result.changedRows === 0) {
                throw new Error('No se encontr� el libro');
            }
            res.json({ "Registros Actualizados": result.changedRows });

        } catch (err) {
            console.error(err);
            res.status(400).json({ Error: 'Libro inexistente, verificar los datos ingresados' });
        }
    }
 

    /* Actividad 1 Punto C y D */

    async delete(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`DELETE FROM Libros WHERE ISBN=(?)`, [libro.ISBN]);
            res.json({ "Registros eliminados": result.affectedRows });

        } catch (err) {
            console.error(err);
            res.status(400).json({ Error: 'Libro inexistente, verificar los datos ingresados' });
        }
    }

}

export const libro = new LibroController();