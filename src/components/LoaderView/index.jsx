import { Oval } from "react-loader-spinner";

const LoaderView = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Oval
      height={50}
      width={50}
      color="#0b69ff"
      ariaLabel="loading"
      visible={true}
    />
  </div>
);

export default LoaderView;
