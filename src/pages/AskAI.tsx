import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { getAnswer } from "../services/langchain-service";

const AskAi: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  //const langchainService = new LangchainService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await getAnswer(question);
    setAnswer(response);
  };

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h5" gutterBottom>
        Спросите эксперта об автомобилях
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          label="Ваш вопрос"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Спросить
        </Button>
      </form>
      {answer && <Typography sx={{ mt: 2 }}>{answer}</Typography>}
    </Paper>
  );
};

export default AskAi;
