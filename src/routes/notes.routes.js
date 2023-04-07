const { Router } = require("express");

const NotesController = require("../controllers/NotesController");


const notesRouter = Router();

const notesController = new NotesController;

notesRouter.post("/:user_id", notesController.create);
notesRouter.get("/:id", notesController.show);
notesRouter.delete("/:id", notesController.delete);


module.exports = notesRouter;