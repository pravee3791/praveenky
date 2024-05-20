import PDF from "./resume.pdf";

const Resume = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe src={PDF} width={"100%"} height={"100%"} />
    </div>
  );
};
export default Resume;
