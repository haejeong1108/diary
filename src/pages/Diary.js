import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>ここは日記詳細ページです。</p>
    </div>
  );
};

export default Diary;
