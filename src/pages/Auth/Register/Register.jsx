import MainLogo from "@/Components/shared/MainLogo";
import { AuthContext } from "@/Context/AuthContext";
import { useAxiosInstance } from "@/Hooks/useAxiosInstance";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

const Register = () => {
  const location = useLocation();
  const axiosInstace = useAxiosInstance();
  const { createUser } = useContext(AuthContext);

  const handleRegistretion = async (e) => {
    e.preventDefault();
    const form = e.target;
    const FName = form.FName.value;
    const LName = form.LName.value;
    const email = form.email.value;
    const password = form.password.value;
    const blod = form.blod.value;
    const age = form.age.value;

    const userData = { FName, LName, email, password, blod, age };
    try {
      const userCredential = await createUser(email, password);
      if (userCredential.user) {
        toast.success("Firebase user created with Context api");
        await axiosInstace.post("/users", userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between h-screen">
      {/* left side  */}
      <div className="bg-amber-100  flex-1"></div>

      {/* right side */}
      <div className=" flex-1">
        <div className="flex justify-end">
          <MainLogo />
        </div>
        <div className="  p-4 flex justify-center items-center">
          <form onSubmit={handleRegistretion}>
            <div className="space-y-2 ">
              {/* name area  */}
              <div className="flex  justify-between items-center">
                <div className="flex flex-col">
                  <label for="FName" className="font-semibold text-sm ">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FName"
                    name="FName"
                    placeholder="Bat"
                    className="inputFiled"
                  />
                </div>
                <div className="">
                  <label for="LName" className="font-semibold text-sm flex">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LName"
                    name="LName"
                    placeholder="Man"
                    className="inputFiled"
                  />
                </div>
              </div>

              {/* email area  */}
              <div className="flex flex-col">
                <label for="email" className="font-semibold text-sm ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  className="inputFiled"
                />
              </div>
              {/* password area  */}
              <div className="flex flex-col">
                <label for="password" className="font-semibold text-sm ">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  className="inputFiled"
                />
              </div>
              {/* blod grp area  */}
              <div className="flex justify-center gap-20">
                <div>
                  <label htmlFor="blod" className="font-semibold text-sm flex ">
                    Chosse a blod grp
                  </label>
                  <select name="blod" id="blod" className="inputFiled">
                    <option value="A+">Blood grp A+</option>
                    <option value="A-">Blood grp A-</option>
                    <option value="B+">Blood grp B+</option>
                    <option value="B-">Blood grp B-</option>
                    <option value="AB+">Blood grp AB+</option>
                    <option value="AB-">Blood grp AB-</option>
                    <option value="O+">Blood grp O+</option>
                    <option value="O-">Blood grp O-</option>
                  </select>
                </div>

                <div>
                  {/* age area */}
                  <div>
                    <p className="text-sm font-semibold">
                      Is your age 18 + or Not
                    </p>

                    <div>
                      <input type="radio" name="age" id="age18+" value="18+" />
                      <label htmlFor="age18+">Yes 18+</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="age"
                        id="under18"
                        value="under 18"
                      />
                      <label htmlFor="under18">Under 18</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* submit button  */}
              <div className=" flex justify-end">
                <input
                  type="submit"
                  value="Create account"
                  className="bg-primary hover:bg-transparent hover:text-text border-2 rounded-xl border-border p-2 text-surface font-bold hover:cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
