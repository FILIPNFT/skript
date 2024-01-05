import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'static', 'dist')));

app.listen(8000, () => {
    console.log('Server pokrenut na portu http://localhost:8000');
});