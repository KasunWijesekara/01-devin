import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface InquiryEmailProps {
  loginCode?: string;
  firstName: string;
  email: string;
  phone: string;
  option: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

// const baseUrl = "http://localhost:3001/";

export const InquiryEmail = ({
  firstName, // Add this line
  email,
  phone,
  option,
  message,
}: InquiryEmailProps) => (
  <Html>
    <Head />
    <Preview>
      {firstName} | {option} | {phone}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}logo.png`}
          width="100"
          height="100"
          alt="zero-one-logo"
          style={logo}
        />
        <Text style={paragraph}>
          <b>Name </b> - {firstName}
        </Text>
        <Text style={paragraph}>
          <b>Email</b> - {email}
          <br />
          <b>Phone</b> - {phone}
          <br />
          <b>Option </b>- {option}
          <br />
          <br />
          <b>Message</b>
          <br />
          {message}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Colombo, Sri Lanka 🇱🇰</Text>
      </Container>
    </Body>
  </Html>
);

export default InquiryEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const thankyou = {
  margin: "2rem 0 0",
  fontSize: "14px",
  lineHeight: "26px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "26px",
};
const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
