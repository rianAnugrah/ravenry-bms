import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Ravenry BMS</span>
      </h1>
      <p className={headerStyles.description}>Meet the best Freelancer</p>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "blue" : "red"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
