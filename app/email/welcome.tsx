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

interface WelcomeEmailProps {
  firstName: string;
}

const baseUrl = process.env.ZERO_ONE_URL
  ? `http://${process.env.ZERO_ONE_URL}`
  : "";

// const baseUrl = "http://localhost:3001/";

export const WelcomeEmail = ({
  firstName, // Add this line
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Explore, how AI can elevate your business operations</Preview>
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
          Hello <b> {firstName} </b> 👋
        </Text>
        <Text style={paragraph}>
          Welcome to Zero-One! As a leading Sri Lankan AI automation and
          research company, we are dedicated to unlocking innovative AI
          solutions to elevate your business and even your day-today-life.
          <br />
          <br />
          We are thrilled to have you on board. A member of our team will reach
          out shortly to arrange a discussion. Should you have any immediate
          queries, do not hesitate to drop us a line at
          <b> hello@zero-one.online</b>
        </Text>
        <Text style={thankyou}>
          Thank you.
          <br />
          The Zero-One Support Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Colombo, Sri Lanka 🇱🇰</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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
