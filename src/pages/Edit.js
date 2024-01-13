import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>ここは日記修正ページです。</p>
      <button onClick={() => setSearchParams({ who: "haejeong" })}>
        button
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOMEへ
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        戻る
      </button>
    </div>
  );
};

export default Edit;
