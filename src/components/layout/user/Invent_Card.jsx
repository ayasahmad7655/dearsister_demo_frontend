import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function FAQCard() {
  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        maxWidth: "20%",
        // width: 500,
        // to make the demo resizable
        // resize: "horizontal",
        // overflow: "auto"
        // padding: "60px",
      }}
    >
      <CardContent sx={{ gap: 1.5 }}>
        <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg">Need Some Help?</Typography>
          <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
            32
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            "--variant-borderWidth": "2px",
            borderRadius: 40,
            borderColor: "primary.500",
            mx: "auto",
          }}
        >
          See FAQ
        </Button>
      </CardContent>
    </Card>
  );
}
