import React from "react";

type Props = {
  name?: string;
};

const Footer = ({ name }: Props) => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <h1>Site Footer</h1>
    </footer>
  );
};

export default Footer;
