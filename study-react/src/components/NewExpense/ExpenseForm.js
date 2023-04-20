import React, { useState } from "react";
import "./ExpenseForm.css";
import axios from "axios";
const ExpenseForm = (props) => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImageSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://127.0.0.1:8000/analyze/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert(
            "업로드가 완료되었습니다! 업데이트 버튼을 눌러 가계부를 갱신 후 원하는 연도를 선택해주세요!"
          );
        } else if (response.status == 400) {
          alert(
            "이미지의 영수증이 정확하지 않습니다. 다른 이미지를 사용해주세요"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleImageSubmit}>
        <input id="file-upload" type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
