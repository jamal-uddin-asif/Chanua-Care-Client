import MainLogo from "@/Components/shared/MainLogo";
import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await signInUser(email, password);
      if (userCredential) {
        toast.success("user login successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <div className=" flex-1">
      <div className="flex justify-end">
        <MainLogo />
      </div>
      <div className="  p-4 flex flex-col justify-center items-center">
        <div className=" text-center my-5 space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">Wellcome back</h1>
          <p className="text-text">
            Join now to Chanua Care your experience form day one
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="space-y-2 ">

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
                value="Login"
                className="bg-primary hover:bg-transparent hover:text-text border-2 rounded-xl border-border p-2 text-surface font-bold hover:cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
