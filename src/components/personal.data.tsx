import { SyntheticEvent, useState } from "react";
import { PersonalData } from "../models/personal.data";

export function PersonaData() {
  const [formState, setFormState] = useState<PersonalData>();

  return (
    <>
      <form>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div>
            <label htmlFor="birthdate">BirthDate</label>
            <input type="date" name="birthdate" id="birthdate" />
          </div>
          <fieldset>
            <legend>Gender</legend>
            <label htmlFor="gender">
              <input type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" value="other" id="other" />
              <label htmlFor="other">Other</label>
              <input type="radio" name="gender" value="none" id="none" />
              <label htmlFor="none">Prefer not to say</label>
            </label>
          </fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="newsletter">Newsletter</label>
          <input type="checkbox" name="newsletter" id="newsletter" />
          <button>Submit</button>
        </div>
      </form>
      <img src="hang.jpg" alt="sad marco" />
    </>
  );
}
