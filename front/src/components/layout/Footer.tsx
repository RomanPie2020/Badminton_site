import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-footer_bg pt-50 flex flex-col justify-center bg-cover bg-no-repeat px-10 pb-10 pt-64">
      <Logo logo={{ title: "" }} />

      <h1 className="text-xl">
        ©COPYRIGHT 2021 BADMILEARN. ALL RIGHTS RESERVED. THE CONTENT OF THIS
        WEBSITE IS THE PROPERTY OF BADMILEARN. NO PART MAY BE COPIED,
        REPUBLISHED, STORED, OR OTHERWISE REPUBLISHED OR TRANSMITTED WITHOUT THE
        PRIOR WRITTEN PERMISSION OF BADMILEARN.
      </h1>
    </div>
  );
}

export default Footer;
