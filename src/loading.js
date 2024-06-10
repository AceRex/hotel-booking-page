import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-[100vw] h-[100vh] m-auto p-auto flex items-center place-content-center">
      <div className="text-center">
        <p className="text-2xl">Loading...</p>
        <InfinitySpin
          visible={true}
          width="200"
          color="#3599FD"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </div>
  );
}
