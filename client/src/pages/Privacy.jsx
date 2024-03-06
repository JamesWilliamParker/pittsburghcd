import React from "react";
import { Container } from "reactstrap";

function Privacy() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Privacy Policy</h1>
      <iframe
        src="Privacy_Policy_For_Pittsburgh_Doors_And_Closets.pdf#view=FitH"
        className="pdf"
        title="Privacy Policy"
      ></iframe>
    </Container>
  );
}

export default Privacy;
