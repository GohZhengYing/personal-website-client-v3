'use client';

import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';

type NavButtonProps = {
  name: string;
  dir: string;
};

const NavButton = ({ name, dir }: NavButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/${dir}`)}
      sx={{
        color: "#1F2937",           // default text color
        fontFamily: "Roboto",
        fontWeight: 500,
        textTransform: "none",
        backgroundColor: "transparent",  // ensure background doesn't change
        transition: "color 0.3s ease",  // smooth color transition
        '&:hover': {
          color: "#8f9194",          // text color on hover
          backgroundColor: "transparent", // keep background transparent
        },
      }}
    >
      {name}
    </Button>
  );
};

export default NavButton;
