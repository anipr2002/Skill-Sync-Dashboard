import { Button } from "@/components/ui/button";
// import Logo from "./logo";

const Footer = () => {
  return (
    <div
      className="
    flex items-center w-full p-6 bg-transparent z-50 dark:bg-[#1f1f1f]"
    >
      {/* <Logo /> */}
      <div
        className="md:ml-auto w-full justify-between md:justify-end
       flex items-center gap-x-2 text-muted-foreground"
      >
        <Button variant="sidebar" size="sm">
          Privacy Policy
        </Button>
        <Button variant="sidebar" size="sm">
          Terms and conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
