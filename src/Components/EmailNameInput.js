import { React, useState } from "react";
import TextInput from "../shared/TextInput";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";

const EmailNameInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  const sendMail = async (e) => {
    const data = { email, name, subject, body };
    const response = await makeUnauthenticatedPOSTRequest("/sendmail", data);
    if (response && !response.err) {
      alert("Sent Successfully");
    } else alert(response.err);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="inputRegion w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-4 text-3xl pb-10">
          Sellerkin Email Sender
        </div>

        <TextInput
          label="What's your email?"
          placeholder="Enter your email."
          value={email}
          setValue={setEmail}
        />

        <TextInput
          label="Username"
          placeholder="Enter your Username."
          className="my-2 mb-4"
          value={name}
          setValue={setName}
        />

        <TextInput
          label="Subject"
          placeholder="Enter Subject"
          className="my-2 mb-4"
          value={subject}
          setValue={setSubject}
        />

        <TextInput
          label="Body"
          placeholder="Enter Body"
          className="my-2 mb-4"
          value={body}
          setValue={setBody}
        />

        <div className="w-full flex items-center justify-center mt-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              sendMail();
            }}
          >
            SEND MAIL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailNameInput;
