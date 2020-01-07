const mongoose = require("mongoose");
const UserModel = require("../model/user.model");
const MONGODB_URL = "mongodb://localhost:27017/quest";

const userData = {
  isVerified: false,
  lastName: "hhh",
  firstName: "hh",
  email: "noNefwErrosggsg2r@douqsdqsdbsfletest.fr",
  password: "$2b$12$rAiDoqvHO7gwH0Pw16MtMezz1EVTvhZuJqG72NbYyM35aa/LTApam",
  admin: false
};

const userDataWithUnwantedFields = {
  isVerified: false,
  lastName: "hhh",
  firstName: "hh",
  email: "noNefsggsgswEqsdqsdfdssfdfsfrro2r@doubletest.fr",
  password: "$2b$12$rAiDoqvHO7gwH0Pw16MtMezz1EVTvhZuJqG72NbYyM35aa/LTApam",
  admin: false,
  age: 45
};

describe("User Model Test", () => {
  beforeAll(async () => {
    await mongoose.connect(
      MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => {
        if (err) {
          console.error(err);
          process.exit(1);
        } else {
          console.log("Connection établie");
        }
      }
    );
  });

  it("Should create & save user successfully", async () => {
    const validUser = new UserModel(userData);
    const savedUser = await validUser.save();
    expect(savedUser.firstName).toBe(userData.firstName);
    expect(savedUser.lastName).toBe(userData.lastName);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).not.toBe(userData.password);
  });

  it("Should create a new user successfully without the fields undefined in schemas", async () => {
    const validUserWithUnwantedFields = new UserModel(
      userDataWithUnwantedFields
    );
    const savedUserWithUnwantedFields = await validUserWithUnwantedFields.save();
    expect(savedUserWithUnwantedFields._id).toBeDefined();
    expect(savedUserWithUnwantedFields.age).toBeUndefined();
  });

  it("Should fail if the required fields are not filled", async () => {
    const userWithoutRequiredFields = new UserModel({ firstName: "Johnny" });
    let err;
    try {
      const savedUserWithoutRequiredFields = await userWithoutRequiredFields.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.lastName).toBeDefined();
  });
});
