import Container from "@/Components/shared/Container";
import { Outlet, useLocation } from "react-router";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <div className={` md:flex ${location.pathname === '/auth/register' && 'flex-row-reverse'} gap-4  justify-between h-screen `}>
        {/* left side  */}
        <div className="hidden overflow-hidden md:flex bg-primary rounded-2xl  flex-col justify-center items-center my-4 flex-1">
          <div className="relative ">
            <img
              className="max-w-[450px] "
              src="https://i.ibb.co.com/5XqRCx52/dashboard.webp"
              alt=""
            />
            <img
              className="max-w-[200px] absolute top-20 shadow-2xl -right-14"
              src="https://i.ibb.co.com/GQTsyVfY/unnamed.png"
              alt=""
            />
          </div>
        </div>

        {/* right side */}
        <div>
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AuthLayout;
