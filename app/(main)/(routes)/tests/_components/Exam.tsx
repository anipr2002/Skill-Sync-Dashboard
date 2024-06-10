import React from "react";
import ExamCard from "./ExamCard";
const Exam = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-5 justify-center mt-10">
        <ExamCard
          examDescription="This is a test description"
          examDuration="30 minutes"
          examTitle="Test Title"
        />
        <ExamCard
          examDescription="This is a test description"
          examDuration="30 minutes"
          examTitle="Test Title"
        />
        <ExamCard
          examDescription="This is a test description"
          examDuration="30 minutes"
          examTitle="Test Title"
        />
        <ExamCard
          examDescription="This is a test description"
          examDuration="30 minutes"
          examTitle="Test Title"
        />
      </div>
    </>
  );
};

export default Exam;
