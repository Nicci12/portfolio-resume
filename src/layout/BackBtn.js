import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="demo-back-link" onClick={() => router.back()} href="#">
      <i className="fas fa-arrow-left" />
    </div>
  );
};
export default BackBtn;
