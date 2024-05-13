import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_orange";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-xl border ${variant}`}
    >
      <label className="whitespace-nowrap bold-14">{title}</label>{" "}
      {icon && <Image src={icon} alt={title} width={13} height={13} />}
    </button>
  );
};

export default Button;
