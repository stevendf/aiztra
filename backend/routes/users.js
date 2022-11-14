const router = require("express").Router();
const bcrypt = require("bcrypt");

// modelo de usuario
const { User, validate } = require("../models/user");

// POST crear usuario
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "El usuario ya existe" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Usuario creado." });
	} catch (error) {
		res.status(500).send({ message: "Error interno del servidor" });
	}
});


// GET obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET obtener usuario por id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ADD agregar nuevo usuario
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new User({firstName, lastName, email, password});
  await user.save();
  res.json({status: 'Usuario guardado'});
});

module.exports = router;