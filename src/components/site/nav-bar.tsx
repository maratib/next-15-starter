import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
// import { Button } from "@radix-ui/themes";

type Props = {
  name?: string;
};

const NavBar = ({ name }: Props) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Signin</Link>
      <Link href="/signup">Signup</Link>
      {/* <Button>Hello</Button> */}
    </div>
  );
};

export default NavBar;
