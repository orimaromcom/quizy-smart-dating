import { promises as fs } from 'fs';

const DATA_FILE_NAME = "savedData.json";

export async function getItems(){
  const data = await fs.readFile(DATA_FILE_NAME);
  return JSON.parse(data);
}

export async function insertItems(data){
  await fs.writeFile(DATA_FILE_NAME, JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
