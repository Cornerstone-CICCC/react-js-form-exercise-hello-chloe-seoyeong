import "./App.css";
import { ChangeEvent, useState } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  age: number;
  favoriteFoods: string[];
};

const App = () => {
  /* Your states here */
  const [isShowGreeting, setIsShowGreeting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  });

  const handleDisplay = () => {
    setIsShowGreeting(!isShowGreeting);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updateFavFoods = checked
        ? [...prevState.favoriteFoods, value]
        : prevState.favoriteFoods.filter((level) => level !== value);
      return { ...prevState, favoriteFoods: updateFavFoods };
    });
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: [],
    });
  };

  return (
    <div>
      <h1>User Form</h1>
      <form
        style={{
          display: "flex",
          gap: ".5rem",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={formData.favoriteFoods.includes("Chicken")}
              onChange={handleCheckbox}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={formData.favoriteFoods.includes("Beef")}
              onChange={handleCheckbox}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={formData.favoriteFoods.includes("Vegetables")}
              onChange={handleCheckbox}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={formData.favoriteFoods.includes("Dessert")}
              onChange={handleCheckbox}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={formData.favoriteFoods.includes("Pork")}
              onChange={handleCheckbox}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplay}>
        {isShowGreeting ? "Hide" : "Display"} User
      </button>
      <button onClick={handleClear}>Clear</button>

      {isShowGreeting ? (
        <div className="output" style={{ marginTop: "1rem" }}>
          Hello {formData.firstname} {formData.lastname}. You are {formData.age}{" "}
          years old and your favorie foods are:
          {formData.favoriteFoods.map((food, index) => (
            <span key={index}>{food}, </span>
          ))}
          .
        </div>
      ) : null}
    </div>
  );
};

export default App;
